export const EVENTS = [
  {
    slug: 'backyard-town-hall-hood-river',
    featured: true,
    date: 'Jun 22',
    weekday: 'Saturday',
    fullDate: 'Saturday, June 22, 2026',
    time: '10:00 AM — 12:00 PM',
    timezone: 'Pacific Time',
    title: 'Backyard Town Hall',
    subtitle: 'Hood River · Overlook Park',
    venue: 'Overlook Park',
    address: '412 Belmont Ave, Hood River, OR 97031',
    blurb:
      'Bring a chair, a question, and a neighbor. Jordan will be answering everything from housing to healthcare under the willows.',
    description:
      'Our most popular gathering of the cycle returns. Open mic Q&A, coffee, and a chance to put real questions to Jordan in person. Kid-friendly. Bilingual translation available. Lawn chairs welcome — the venue has limited bench seating.',
    highlights: [
      '60-minute open Q&A with Jordan',
      'Spanish-language interpretation on site',
      'Free coffee, water, and pastries from Bette’s Place',
      'Kids’ activity table run by Hood River Library',
      'ADA-accessible entry and seating',
    ],
    cat: 'Town Hall',
    rsvp: 412,
    capacity: 600,
    image:
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1400&auto=format&fit=crop&q=80',
    host: 'Hood River County Volunteers',
  },
  {
    slug: 'volunteer-door-knock-kickoff',
    date: 'Jun 28',
    weekday: 'Friday',
    fullDate: 'Friday, June 28, 2026',
    time: '5:30 PM — 8:00 PM',
    timezone: 'Pacific Time',
    title: 'Volunteer Door-Knock Kickoff',
    subtitle: 'Field Office · The Dalles',
    venue: 'ElectSmith Field Office',
    address: '1102 Oak Street, The Dalles, OR 97058',
    blurb:
      'Our biggest canvass weekend launch. Training, snacks, and a short walk to the precincts that decide this race.',
    description:
      'Whether you’ve never knocked a door or you’ve done 500, we’ll match you with a partner, a precinct, and a script you’re comfortable with. Stick around after for pizza and field debrief.',
    highlights: [
      '20-minute door-knock training (no experience required)',
      'Paired partners for every volunteer',
      'Walk-friendly precincts within 1 mile',
      'Pizza, drinks, and music after the canvass',
      'Spanish-speaking team welcome',
    ],
    cat: 'Volunteer',
    rsvp: 96,
    capacity: 150,
    image:
      'https://images.unsplash.com/photo-1573164574511-73c773193279?w=1400&auto=format&fit=crop&q=80',
    host: 'Field Team',
  },
  {
    slug: 'climate-workforce-roundtable',
    date: 'Jul 06',
    weekday: 'Saturday',
    fullDate: 'Saturday, July 6, 2026',
    time: '9:00 AM — 11:00 AM',
    timezone: 'Pacific Time',
    title: 'Climate & Workforce Roundtable',
    subtitle: 'Columbia Gorge CC',
    venue: 'Columbia Gorge Community College · Building C',
    address: '400 E Scenic Dr, The Dalles, OR 97058',
    blurb:
      'A working session with union leaders, climate scientists, and apprentices on what real climate investment looks like for the gorge.',
    description:
      'Closed-door discussion with public observation. We’ll talk about the federal investments coming to Oregon and how to make sure they land in the right zip codes — and union halls — first.',
    highlights: [
      'Featured guests from IBEW, Carpenters, and Oregon Climate Coalition',
      'Public observation row (no Q&A)',
      'Coffee & light breakfast',
      'Working session — bring a notebook',
    ],
    cat: 'Policy',
    rsvp: 58,
    capacity: 80,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&auto=format&fit=crop&q=80',
    host: 'Policy Team',
  },
  {
    slug: 'pints-with-jordan-astoria',
    date: 'Jul 14',
    weekday: 'Sunday',
    fullDate: 'Sunday, July 14, 2026',
    time: '4:00 PM — 6:00 PM',
    timezone: 'Pacific Time',
    title: 'Pints with Jordan',
    subtitle: 'Pelican Brewing · Astoria',
    venue: 'Pelican Brewing — Astoria Pub',
    address: '1465 N Roosevelt Dr, Astoria, OR 97103',
    blurb: 'Casual conversation, no script. Pull up a stool — first round is on the field office.',
    description:
      'Drop in any time during the window. Bring a friend, an opinion, or just a good story. Limited tables; non-alcoholic options on the house.',
    highlights: [
      'Casual meet & greet — no formal program',
      'First round on us (alcoholic + non-alcoholic)',
      'Family-friendly until 5:30',
      'Free campaign stickers for everyone',
    ],
    cat: 'Meet & Greet',
    rsvp: 71,
    capacity: 120,
    image:
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1400&auto=format&fit=crop&q=80',
    host: 'North Coast Chapter',
  },
  {
    slug: 'healthcare-listening-session',
    date: 'Jul 25',
    weekday: 'Thursday',
    fullDate: 'Thursday, July 25, 2026',
    time: '6:30 PM — 8:00 PM',
    timezone: 'Pacific Time',
    title: 'Healthcare Listening Session',
    subtitle: 'Sunset Community Hall · Beaverton',
    venue: 'Sunset Community Hall',
    address: '1605 NW 173rd Ave, Beaverton, OR 97006',
    blurb:
      'A working evening with nurses, patients, and pharmacists on what fixes the system from where they stand.',
    description:
      'Three roundtable stations: insulin & drug pricing, mental health access, and rural primary care. Move between stations at your own pace.',
    highlights: [
      'Three rotating roundtable stations',
      'Stories collected on the record (with consent)',
      'Childcare available with RSVP',
      'ASL interpretation provided',
    ],
    cat: 'Town Hall',
    rsvp: 184,
    capacity: 250,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&auto=format&fit=crop&q=80',
    host: 'Healthcare Working Group',
  },
]

export const getEvent = (slug) => EVENTS.find((e) => e.slug === slug)

export const getRelatedEvents = (slug, count = 3) =>
  EVENTS.filter((e) => e.slug !== slug).slice(0, count)
