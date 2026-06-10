import LegalPage from '@/components/legal-page'

export const metadata = {
  title: 'Terms of use',
  description: 'The terms that govern your use of the ElectSmith campaign website.',
}

const TermsPage = () => (
  <LegalPage
    eyebrow="Legal — Terms"
    title="Terms of use"
    intro="The rules that govern your use of this site. Read them — they're short."
    updated="May 1, 2026"
    crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
    sections={[
      {
        heading: 'Use of the site',
        body: 'You may use this site for personal, non-commercial purposes related to the campaign. You may not scrape, copy, redistribute, or otherwise reuse the content without written permission.',
      },
      {
        heading: 'Contributions',
        body: 'Donations made through this site are governed by federal election law. You are certifying that you are a U.S. citizen or lawful permanent resident, that the funds are your own (not given by another for the purpose of donation), and that you are not a federal contractor.',
      },
      {
        heading: 'Intellectual property',
        body: 'The campaign brand, logos, and original written content are the property of the ElectSmith campaign. Photography credited to external sources is used under license.',
      },
      {
        heading: 'Disclaimer',
        body: 'We do our best to keep information accurate and up-to-date, but campaign positions, events, and endorsements may change. Check the relevant page directly for the most current information.',
      },
      {
        heading: 'Changes',
        body: 'We may update these terms from time to time. Updates take effect when posted; the date at the top will reflect the most recent revision.',
      },
    ]}
  />
)

export default TermsPage
