'use client'

import PropTypes from 'prop-types'
import { motion } from 'motion/react'

/**
 * Reveal — drop-in `whileInView` wrapper for sections that DON'T sit
 * inside <SectionFrame> (which already handles `[data-reveal]` content).
 *
 * Use this on standalone images, headings, or panels that need the same
 * smooth enter animation but live outside the SectionFrame timeline.
 */
const Reveal = ({
  as = 'div',
  y = 24,
  duration = 0.9,
  delay = 0,
  amount = 0.3,
  once = true,
  className,
  children,
  ...rest
}) => {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  as: PropTypes.string,
  y: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  amount: PropTypes.number,
  once: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Reveal
