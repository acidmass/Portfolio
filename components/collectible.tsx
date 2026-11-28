'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './language-provider'
import { createBlisterRenderer } from '@/lib/blister-renderer'

const artwork = '/images/carmen-blister-white.webp'
const limit = 55

export function Collectible() {
  const { language } = useLanguage()
  const english = language === 'en'
  const [ready, setReady] = useState(false)
  const canvas = useRef<HTMLCanvasElement>(null)
  const renderer = useRef<ReturnType<typeof createBlisterRenderer> | null>(null)
  const drag = useRef<{ x: number; angle: number } | null>(null)
  const current = useRef(0)

  useEffect(() => {
    const element = canvas.current
    if (!element) return
    // Keep the illustration static on narrow screens and for reduced-motion preferences.
    // Avoid creating a WebGL context where the interaction adds little value.
    if (window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches) return
    let active = true
    const observer = new ResizeObserver(() => renderer.current?.draw(current.current))
    const image = new Image()
    const lost = () => setReady(false)
    element.addEventListener('webglcontextlost', lost)
    image.onload = () => {
      if (!active) return
      try {
        renderer.current = createBlisterRenderer(element, image)
        renderer.current.draw(current.current)
        observer.observe(element)
        setReady(true)
      } catch {
        setReady(false)
      }
    }
    image.src = artwork
    return () => {
      active = false
      element.removeEventListener('webglcontextlost', lost)
      observer.disconnect()
      renderer.current?.dispose()
      renderer.current = null
      drag.current = null
    }
  }, [])

  function rotate(value: number) {
    current.current = Math.round(Math.max(-limit, Math.min(limit, value)))
    renderer.current?.draw(current.current)
  }

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] -rotate-3 drop-shadow-[0_14px_10px_rgba(71,25,33,0.18)] md:max-w-[23rem]">
      <img src={artwork} alt={english ? 'Carmen’s collectible figure with design tools and Rodolfo' : 'Figura de Carmen con herramientas de diseño y Rodolfo'} className={ready ? 'hidden' : 'size-full object-contain p-5'} />
      <canvas ref={canvas} role="img" aria-label={english ? '3D figure. Use the arrow keys to turn it.' : 'Figura en 3D. Usa las flechas para girarla.'}
        tabIndex={ready ? 0 : -1}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            rotate(current.current + (event.key === 'ArrowLeft' ? -5 : 5))
          }
        }}
        className={`absolute inset-0 size-full touch-pan-y ${ready ? 'cursor-ew-resize' : 'invisible'}`}
        onPointerDown={event => {
          if (!event.isPrimary || event.button !== 0) return
          drag.current = { x: event.clientX, angle: current.current }
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={event => {
          if (event.isPrimary && drag.current) rotate(drag.current.angle + (event.clientX - drag.current.x) * 150 / event.currentTarget.clientWidth)
        }}
        onLostPointerCapture={() => { drag.current = null }}
      />
    </div>
  )
}
