import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Accessibility",
  description:
    "Our commitment to an accessible web and in-person campaign experience.",
};

const AccessibilityPage = () => (
  <LegalPage
    eyebrow="Legal — Accessibility"
    title="Accessibility statement"
    intro="An accessible campaign is a campaign that respects every voter. Here's what we do, what we're still fixing, and how to reach us."
    updated="May 1, 2026"
    crumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
    sections={[
      {
        heading: "Our commitment",
        body: "We aim to meet or exceed WCAG 2.1 AA standards across this website. We test with screen readers, keyboard-only navigation, and high-contrast modes.",
      },
      {
        heading: "What we do on the site",
        body: [
          "Sufficient color contrast on all text and interactive elements.",
          "Visible keyboard focus indicators on every link, button, and form field.",
          "Semantic HTML and ARIA attributes where appropriate.",
          "Alt text on all meaningful images.",
          "Respect for `prefers-reduced-motion` — animations are reduced or removed for users who request it.",
        ],
      },
      {
        heading: "What we do at events",
        body: [
          "ADA-accessible venues are the default. We name accessibility features on every event page.",
          "ASL interpretation is available with at least 7 days' notice — email hello@electsmith.org.",
          "Live captioning at all formal speaking events.",
          "Spanish-language interpretation available on request.",
        ],
      },
      {
        heading: "Found a barrier?",
        body: "We want to know. Email hello@electsmith.org with the subject line “Accessibility Issue” and describe what you encountered. We respond to access reports within two business days.",
      },
      {
        heading: "Ongoing work",
        body: "Accessibility is a habit, not a checkbox. We test the site monthly and update this statement as we learn.",
      },
    ]}
  />
);

export default AccessibilityPage;
