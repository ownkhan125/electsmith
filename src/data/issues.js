export const ISSUES = [
  {
    slug: 'healthcare',
    n: 'I',
    tag: 'Health',
    title: 'Healthcare you can actually use',
    summary:
      'Cap prescription costs, expand mental health coverage, and protect Medicare from privatization. Every family deserves care without a coin-flip about rent.',
    pillars: [
      'Cap prescription drug costs at $35/month for insulin and life-saving medication',
      'Expand mental health benefits in every federal plan',
      'Protect Medicare and Social Security from privatization',
      'Codify the Affordable Care Act and close the Medicaid gap',
    ],
    bills: [
      'Affordable Insulin Now Act',
      'Mental Health Parity Compliance Act',
      'Lower Drug Costs Now Act',
    ],
    quote:
      'I’ve sat with neighbors who skipped insulin to make rent. That’s a policy choice — and it can be unmade.',
  },
  {
    slug: 'education',
    n: 'II',
    tag: 'Education',
    title: 'Schools that prepare every kid',
    summary:
      'Fully fund Title I, raise teacher pay to a living wage, and bring trade & technical pathways back to high schools across the district.',
    pillars: [
      'Triple Title I funding to support high-poverty schools',
      'Raise the federal floor on teacher salaries',
      'Expand career and technical education pathways',
      'Forgive student loans for public-service workers after 10 years',
    ],
    bills: [
      'Strength in Diversity Act',
      'Public Service Loan Forgiveness Reform',
      'CTE Excellence Act',
    ],
    quote:
      'I taught physics for twelve years. The kids who showed up wanted a future. We owe them the building blocks.',
  },
  {
    slug: 'climate',
    n: 'III',
    tag: 'Climate',
    title: 'A climate plan with jobs attached',
    summary:
      'Invest in clean-energy manufacturing, rural transmission, and wildfire resilience — built by union labor right here in Oregon.',
    pillars: [
      'Fund Pacific Northwest grid modernization with prevailing-wage requirements',
      'Expand wildfire prevention grants for rural counties',
      'Stand up an Oregon Climate Corps in partnership with tribes and trade unions',
      'Defend the Inflation Reduction Act and close fossil-fuel subsidy loopholes',
    ],
    bills: ['PRO Act', 'Climate Resilience Workforce Act', 'Wildfire Defense Investment Act'],
    quote:
      'We can fight climate change with union jobs and rural investment. The choice was never economy versus environment.',
  },
  {
    slug: 'housing',
    n: 'IV',
    tag: 'Housing',
    title: 'Housing as a right, not a roulette',
    summary:
      'Tax-credit incentives for missing-middle housing, support for first-time buyers, and a federal floor on tenant protections.',
    pillars: [
      'Triple the Low Income Housing Tax Credit',
      'Down-payment support for first-generation homebuyers',
      'Federal protection against junk fees and arbitrary evictions',
      'Re-instate funding for rural USDA housing programs',
    ],
    bills: [
      'Affordable Housing Credit Improvement Act',
      'Tenant Protection Act',
      'Rural Housing Reauthorization Act',
    ],
    quote: 'Housing should never be a coin flip between a roof and groceries. Period.',
  },
  {
    slug: 'rights',
    n: 'V',
    tag: 'Rights',
    title: 'Defending our freedoms',
    summary:
      'Codify reproductive rights, protect voting access, and stand up for LGBTQ+ Oregonians without compromise.',
    pillars: [
      'Codify Roe v. Wade through federal law',
      'Restore the full Voting Rights Act',
      'Pass the Equality Act to protect LGBTQ+ Americans',
      'Restore federal court oversight in jurisdictions with discriminatory voting histories',
    ],
    bills: [
      'Women’s Health Protection Act',
      'John Lewis Voting Rights Advancement Act',
      'Equality Act',
    ],
    quote: 'Freedom isn’t a slogan. It’s a body of law that has to be defended in every session.',
  },
  {
    slug: 'democracy',
    n: 'VI',
    tag: 'Reform',
    title: 'A democracy worthy of your time',
    summary:
      'Ban congressional stock trades, end gerrymandering with independent commissions, and bring transparency to every floor vote.',
    pillars: [
      'Pass the Ban Conflicted Trading Act so members can’t trade stocks',
      'Require independent redistricting commissions nationwide',
      'Publish every congressional schedule and earmark in plain English',
      'Limit dark money in elections via DISCLOSE Act',
    ],
    bills: ['Ban Conflicted Trading Act', 'Freedom to Vote Act', 'DISCLOSE Act'],
    quote:
      'You shouldn’t need a law degree to figure out what your representative voted for. Plain English, every time.',
  },
]

export const getIssue = (slug) => ISSUES.find((i) => i.slug === slug)
