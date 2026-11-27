// The painted front is mapped onto a relief mesh. Coordinates below are
// fractions of the rectified artwork, so the pockets stay aligned on resize.
const pockets = [
  [0.244, 0.580, 0.183, 0.350, 0.185],
  [0.698, 0.368, 0.232, 0.126, 0.096],
  [0.584, 0.609, 0.095, 0.108, 0.065],
  [0.813, 0.609, 0.117, 0.106, 0.060],
  [0.557, 0.823, 0.155, 0.102, 0.075],
  [0.825, 0.823, 0.112, 0.102, 0.130],
]

function relief(u, v) {
  let height = 0
  for (const [cx, cy, rx, ry, depth] of pockets) {
    const distance = ((u - cx) / rx) ** 4 + ((v - cy) / ry) ** 4
    height = Math.max(height, depth * Math.sqrt(Math.max(0, 1 - distance)))
  }
  return height
}

const vertex = `
attribute vec3 position;
attribute vec2 uv;
uniform float angle;
uniform float aspect;
varying vec2 texCoord;
void main() {
  float x = cos(angle) * position.x + sin(angle) * position.z;
  float z = cos(angle) * position.z - sin(angle) * position.x;
  float w = 1.12 - z * 0.16;
  gl_Position = vec4(x / aspect, position.y, -z * 0.5, w);
  texCoord = uv;
}`
const fragment = `
precision mediump float;
uniform sampler2D artwork;
varying vec2 texCoord;
void main() {
  vec4 color = texture2D(artwork, texCoord);
  if (color.a < 0.5) discard;
  gl_FragColor = color;
}`

/** @param {HTMLCanvasElement} canvas @param {HTMLImageElement} image */
export function createBlisterRenderer(canvas, image) {
  const gl = canvas.getContext('webgl', { alpha: true, antialias: true })
  if (!gl) throw new Error('WebGL unavailable')
  const buffers = []
  const shaders = []
  const program = gl.createProgram()
  const texture = gl.createTexture()
  const dispose = () => {
    for (const buffer of buffers) gl.deleteBuffer(buffer)
    for (const shader of shaders) gl.deleteShader(shader)
    gl.deleteTexture(texture)
    gl.deleteProgram(program)
  }
  try {
    for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {
      const shader = gl.createShader(type)
      shaders.push(shader)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Shader unavailable')
      gl.attachShader(program, shader)
    }
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Program unavailable')
    gl.useProgram(program)
    const vertices = [], indices = []
    const cols = 96, rows = 128
    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        const u = col / cols, v = row / rows
        vertices.push((u * 2 - 1) * image.naturalWidth / image.naturalHeight, 1 - v * 2, relief(u, v), u, v)
        if (row < rows && col < cols) {
          const a = row * (cols + 1) + col, b = a + cols + 1
          indices.push(a, b, a + 1, a + 1, b, b + 1)
        }
      }
    }
    function bind(target, data) {
      const buffer = gl.createBuffer()
      buffers.push(buffer)
      gl.bindBuffer(target, buffer)
      gl.bufferData(target, data, gl.STATIC_DRAW)
    }
    bind(gl.ARRAY_BUFFER, new Float32Array(vertices))
    bind(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices))
    for (const [name, size, offset] of [['position', 3, 0], ['uv', 2, 12]]) {
      const loc = gl.getAttribLocation(program, name)
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 20, offset)
    }
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    for (const axis of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T]) gl.texParameteri(gl.TEXTURE_2D, axis, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.enable(gl.DEPTH_TEST)
    const angle = gl.getUniformLocation(program, 'angle')
    const aspect = gl.getUniformLocation(program, 'aspect')
    return {
      draw(degrees) {
        const scale = Math.min(window.devicePixelRatio || 1, 2)
        const width = Math.max(1, Math.round(canvas.clientWidth * scale))
        const height = Math.max(1, Math.round(canvas.clientHeight * scale))
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
        }
        gl.viewport(0, 0, width, height)
        gl.uniform1f(angle, degrees * Math.PI / 180)
        gl.uniform1f(aspect, width / height)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)
      },
      dispose,
    }
  } catch (error) {
    dispose()
    throw error
  }
}
