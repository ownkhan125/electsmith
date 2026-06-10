import LegalPage from '@/components/legal-page'

export const metadata = {
  title: 'Privacy policy',
  description:
    'How the ElectSmith campaign collects, uses, and protects your personal information.',
}

const PrivacyPage = () => (
  <LegalPage
    eyebrow="Legal — Privacy"
    title="Privacy policy"
    intro="We collect what we need to run a campaign — nothing more. Here's exactly what, why, and for how long."
    updated="May 1, 2026"
    crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]}
    sections={[
      {
        heading: 'What we collect',
        body: [
          'When you donate, volunteer, RSVP, or contact us, we collect the information you provide directly — name, email, ZIP, employer/occupation (required by federal law for donors), and the content of your message.',
          'We also collect basic, non-identifying analytics about how the site is used (pages visited, device class, referring source) to improve the experience.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'We use the information to contact you about your action (donation receipt, volunteer shift, event reminder), to comply with FEC reporting requirements, and to send campaign updates if you opted in.',
          'We do not sell or rent your personal information. Ever.',
        ],
      },
      {
        heading: 'Federal disclosure',
        body: 'Federal law requires campaigns to report the name, address, occupation, and employer of any individual contributing more than $200 in an election cycle. This information appears in public FEC filings.',
      },
      {
        heading: 'How long we keep it',
        body: 'We retain volunteer and donor records for the duration of the campaign and the legally required reporting period (currently three years after the close of the cycle). Newsletter subscribers can opt out at any time — we delete subscriber data on unsubscribe within 30 days.',
      },
      {
        heading: 'Your rights',
        body: 'You can request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it (subject to FEC retention requirements). Email hello@electsmith.org with the subject line “Privacy Request”.',
      },
      {
        heading: 'Contact',
        body: 'Questions about this policy can be sent to hello@electsmith.org.',
      },
    ]}
  />
)

export default PrivacyPage
