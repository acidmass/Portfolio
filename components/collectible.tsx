'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './language-provider'
import { createBlisterRenderer } from '@/lib/blister-renderer'

const artwork = '/images/carmen-blister.webp'
const limit = 55

export function Collectible({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  const english = language === 'en'
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const [angle, setAngle] = useState(0)
  const canvas = useRef<HTMLCanvasElement>(null)
  const renderer = useRef<ReturnType<typeof createBlisterRenderer> | null>(null)
  const drag = useRef<{ x: number; angle: number } | null>(null)
  const current = useRef(0)

  useEffect(() => {
    const element = canvas.current
    if (!open || !element) return
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
  }, [open])

  function rotate(value: number) {
    current.current = Math.round(Math.max(-limit, Math.min(limit, value)))
    setAngle(current.current)
    renderer.current?.draw(current.current)
  }

  return (
    <div className="md:col-span-5">
      {open ? (
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eee3d6]">
          <img src={artwork} alt={english ? 'Carmen’s collectible figure with design tools and Rodolfo' : 'Figura de Carmen con herramientas de diseño y Rodolfo'} className={ready ? 'sr-only' : 'size-full object-contain p-5'} />
          <canvas ref={canvas} aria-hidden="true"
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
      ) : children}
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <button type="button" aria-pressed={open} className="rounded-full border border-current px-4 py-2 text-sm font-medium"
          onClick={() => { setReady(false); current.current = 0; setAngle(0); setOpen(!open) }}>
          {open ? (english ? 'View portrait' : 'Ver retrato') : (english ? 'View figure in 3D' : 'Ver figura en 3D')}
        </button>
        {open && ready && (
          <label className="flex items-center gap-2 text-sm">
            {english ? 'Rotate' : 'Girar'}
            <input type="range" min={-limit} max={limit} value={angle} onChange={e => rotate(Number(e.target.value))} className="w-24" />
          </label>
        )}
      </div>
    </div>
  )
}
