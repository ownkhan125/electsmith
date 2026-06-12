'use client'

import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { cn } from '@/lib/cn'

/**
 * SocialPreview — scales a native 1080×{1080|1920} HTML creative
 * into any container while preserving aspect ratio. The iframe is
 * rendered at native size and scaled with a CSS transform so the
 * design is never cropped or clipped, only rescaled.
 */
const SocialPreview = ({
  src,
  srcDoc,
  nativeWidth,
  nativeHeight,
  aspect,
  className,
  rounded = 'rounded-2xl',
  interactive = false,
  title,
}) => {
  const wrapRef = useRef(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const update = () => {
      const w = el.clientWidth
      if (w > 0) setScale(w / nativeWidth)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [nativeWidth])

  return (
    <div
      ref={wrapRef}
      className={cn(
        'relative overflow-hidden bg-ink shadow-[0_30px_70px_-30px_rgb(var(--shadow-warm)_/_0.45)]',
        rounded,
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <iframe
        src={srcDoc ? undefined : src}
        srcDoc={srcDoc || undefined}
        title={title || 'Social creative preview'}
        scrolling="no"
        loading="lazy"
        tabIndex={interactive ? 0 : -1}
        className="absolute left-0 top-0 origin-top-left border-0"
        style={{
          width: nativeWidth,
          height: nativeHeight,
          transform: `scale(${scale || 0.0001})`,
          pointerEvents: interactive ? 'auto' : 'none',
        }}
      />
    </div>
  )
}

SocialPreview.propTypes = {
  src: PropTypes.string,
  srcDoc: PropTypes.string,
  nativeWidth: PropTypes.number.isRequired,
  nativeHeight: PropTypes.number.isRequired,
  aspect: PropTypes.string.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.string,
  interactive: PropTypes.bool,
  title: PropTypes.string,
}

export default SocialPreview
