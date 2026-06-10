export const NEWS = [
  {
    slug: "jordan-smith-announces-congress",
    category: "Announcement",
    date: "Apr 14, 2026",
    iso: "2026-04-14",
    title:
      "Jordan Smith announces 2026 campaign for Oregon's 3rd Congressional District",
    excerpt:
      "Teacher, veteran, and former school-board chair Jordan Smith launches a grassroots-funded campaign with a focus on working families, climate action, and rural healthcare.",
    body: [
      "HOOD RIVER, OR — Jordan Smith, a twelve-year physics teacher and former Hood River school-board chair, announced today their candidacy for Oregon's 3rd Congressional District in the November 2026 election.",
      "Joined by family, former students, and a coalition of working-family advocates, Smith pledged to refuse all corporate PAC funding and run a campaign powered by small-dollar donors and volunteer field organizers.",
      "“This campaign is about returning Congress to the people who pay attention to school-board votes and county-commissioner meetings,” Smith said. “Working families have been told to wait their turn for too long. We're done waiting.”",
      "Smith served four years in the U.S. Navy as an electronics technician before returning to Oregon to teach. They later founded the River Coalition, a bipartisan partnership that protected 60 miles of the Columbia tributaries from industrial discharge.",
    ],
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1400&auto=format&fit=crop&q=80",
    readMins: 4,
  },
  {
    slug: "oregon-education-association-endorsement",
    category: "Endorsement",
    date: "May 02, 2026",
    iso: "2026-05-02",
    title:
      "Oregon Education Association endorses Jordan Smith for Congress",
    excerpt:
      "The state's largest teachers' union throws its support behind Smith, citing 12 years in the classroom and a track record of fighting for Title I funding.",
    body: [
      "PORTLAND, OR — The Oregon Education Association (OEA), representing 41,000 teachers and education support professionals, formally endorsed Jordan Smith today for Oregon's 3rd Congressional District.",
      "“Jordan understands what it takes to teach a third-period physics class when the heater is broken,” said OEA President Marina del Rio. “We need that in Washington.”",
      "Smith has campaigned on tripling Title I funding, raising the federal floor on teacher salaries, and bringing back career and technical education pathways to every district high school.",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&auto=format&fit=crop&q=80",
    readMins: 3,
  },
  {
    slug: "small-dollar-donations-cross-1-million",
    category: "Field Update",
    date: "May 21, 2026",
    iso: "2026-05-21",
    title:
      "Small-dollar donations cross $1M with average gift under $30",
    excerpt:
      "Campaign reports a major grassroots fundraising milestone, with 94% of contributions under $50 and zero corporate PAC dollars.",
    body: [
      "THE DALLES, OR — The ElectSmith campaign announced today that it has crossed the $1 million mark in small-dollar donations, with 94% of contributions under $50 and an average gift of $28.40.",
      "“This is what a people-powered campaign looks like,” said campaign manager Aisha Brennan. “Every dollar that funds a town hall, a yard sign, or a field organizer came from a neighbor — not a corporation.”",
      "The campaign continues to refuse all corporate PAC money and lobbyist contributions.",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&auto=format&fit=crop&q=80",
    readMins: 3,
  },
  {
    slug: "climate-roundtable-recap-the-dalles",
    category: "Recap",
    date: "Jun 08, 2026",
    iso: "2026-06-08",
    title:
      "Recap: Climate & Workforce Roundtable brings union leaders to The Dalles",
    excerpt:
      "Apprentices, electricians, and climate scientists share what real federal investment should look like in the Columbia River Gorge.",
    body: [
      "THE DALLES, OR — Saturday morning's Climate & Workforce Roundtable at Columbia Gorge Community College drew over 70 attendees and a panel of union leaders, scientists, and apprentices working in the clean-energy transition.",
      "Discussion centered on prevailing-wage requirements for federal grants, rural transmission upgrades, and how to make sure new clean-energy jobs land in Oregon zip codes — and union halls — first.",
      "“What I heard today is that the question isn't whether to invest,” Smith said in closing remarks. “It's whether the people who do the work get a seat at the table when we decide how.”",
    ],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&auto=format&fit=crop&q=80",
    readMins: 5,
  },
];

export const getArticle = (slug) => NEWS.find((n) => n.slug === slug);
