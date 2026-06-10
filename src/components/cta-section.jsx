'use client'

import PropTypes from 'prop-types'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'
import CineButton from '@/components/cine-button'

/**
 * CtaSection — closing CTA used at the bottom of inner pages.
 * Reuses the home page's GetInvolved tone without duplicating its
 * full functionality.
 */
const CtaSection = ({
  eyebrow = 'Get involved — closing chapter',
  title = 'This campaign moves at the speed of you.',
  copy = 'Volunteer, donate, or just stay in touch. Every neighbor matters.',
  primary = { label: 'Donate', href: '/donate' },
  secondary = { label: 'Volunteer', href: '/volunteer' },
}) => {
  return (
    <SectionFrame id="cta" eyebrow={eyebrow} tone="plum">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8">
          <SplitText
            as="h2"
            text={title}
            className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] tracking-[-0.025em] text-cream-50"
          />
          <p
            data-reveal
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg"
          >
            {copy}
          </p>
        </div>
        <div data-reveal className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
          <CineButton href={primary.href} variant="on-dark">
            {primary.label}
          </CineButton>
          {secondary && (
            <CineButton href={secondary.href} variant="ghost-on-dark">
              {secondary.label}
            </CineButton>
          )}
        </div>
      </div>
    </SectionFrame>
  )
}

const ctaShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
})

CtaSection.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  copy: PropTypes.string,
  primary: ctaShape,
  secondary: ctaShape,
}

export default CtaSection
