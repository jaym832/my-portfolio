import fureverimage from "../fureverhomes.png";
import spacecowboy from "../spacecowboy.png";
import nutrition from "../nutrition-app.png";
import war from "../war.png";

import fureverhomes1 from "./screenshots/fureverhomes.png";
import fureverhomes2 from "./screenshots/fureverhomes2.png";
import fureverhomes3 from "./screenshots/fureverhomes3.png";
import fureverhomes4 from "./screenshots/fureverhomes4.png";
import fureverhomes5 from "./screenshots/fureverhomes5.png";
import fureverhomes6 from "./screenshots/fureverhomes6.png";
import fureverhomes7 from "./screenshots/fureverhomes7.png";
import spacecowboygif from "./screenshots/spacecowboy.gif";
import spacecowboygif2 from "./screenshots/spacecowboy2.gif";
import spacecowboy1 from "./screenshots/spacecowboy1.png";
import spacecowboy2 from "./screenshots/spacecowboy2.png";
import spacecowboy4 from "./screenshots/spacecowboy4.png";
import nutrition1 from "./screenshots/nutrition1.png";
import nutrition2 from "./screenshots/nutrition2.gif";
import nutrition3 from "./screenshots/nutrition3.gif";
import war1 from "./screenshots/war1.png";
import war2 from "./screenshots/war2-copy.gif";
import war3 from "./screenshots/war3-copy.gif";
import war4 from "./screenshots/war4.png";

const projects = [
  {
    slug: "fureverhomes",
    title: "FurEverHomes",
    eyebrow: "Full-stack adoption platform",
    image: fureverimage,
    year: "Capstone build",
    summary:
      "A pet adoption and re-homing platform with authenticated user flows, searchable pet profiles, and location-aware discovery.",
    objective:
      "Help people browse adoption and re-homing options through a full-stack pet marketplace.",
    role:
      "Owned the application experience across React views, Rails APIs, authentication, serializers, and Google Maps integration.",
    result:
      "Demonstrates end-to-end product thinking across auth, maps, API design, and user flows.",
    stack: ["React", "Rails", "Google Maps API", "Authentication", "Bootstrap"],
    highlights: [
      "Modeled adoption and re-homing workflows around real user intent.",
      "Integrated map-based discovery so location became part of the browsing experience.",
      "Separated frontend and backend repositories with a clear API boundary.",
    ],
    screenshots: [
      fureverhomes1,
      fureverhomes2,
      fureverhomes3,
      fureverhomes4,
      fureverhomes6,
      fureverhomes7,
      fureverhomes5,
    ],
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=qvlvBNZ7fGw" },
      {
        label: "Frontend",
        href: "https://github.com/jaym832/phase5-project-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/jaym832/phase5-project-backend2",
      },
    ],
  },
  {
    slug: "spacecowboy",
    title: "Space Cowboy",
    eyebrow: "Interactive browser build",
    image: spacecowboy,
    year: "Team project",
    summary:
      "A retro-styled browser application where users create a profile, interact with a real-time canvas experience, and persist scores.",
    objective:
      "Build an interactive browser experience with player creation, real-time actions, and saved scores.",
    role:
      "Partnered on interactive state, React integration, score persistence, and Rails-backed player data.",
    result:
      "Shows comfort blending interactive UI, runtime state, and backend persistence.",
    stack: ["React", "Kaboom.js", "Rails", "PostgreSQL", "Axios"],
    highlights: [
      "Connected runtime state to backend persistence for player scores.",
      "Balanced fast canvas interactions with ordinary web app routing and forms.",
      "Collaborated across frontend interaction design and backend data modeling.",
    ],
    screenshots: [
      spacecowboy1,
      spacecowboygif,
      spacecowboy2,
      spacecowboy4,
      spacecowboygif2,
    ],
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=Uo6JXHZbMsc" },
      { label: "Code", href: "https://github.com/jaym832/space-cowboy" },
    ],
  },
  {
    slug: "nutrition",
    title: "Nutrition Calculator",
    eyebrow: "Personal tracking application",
    image: nutrition,
    year: "Full-stack build",
    summary:
      "A calorie and nutrition tracker for logging meals, reviewing daily intake, and building healthier visibility into food habits.",
    objective:
      "Make food logging feel direct, useful, and connected to persistent nutrition records.",
    role:
      "Designed the React interface and connected it to a Ruby backend with structured nutrition records.",
    result:
      "Shows practical CRUD workflows, data modeling, and API-backed frontend state.",
    stack: ["React", "Ruby", "SQLite", "Active Record", "Bootstrap"],
    highlights: [
      "Created a focused logging flow with persistent daily nutrition entries.",
      "Used API calls to keep client state and backend records in sync.",
      "Practiced schema design around food, nutrients, and user-owned data.",
    ],
    screenshots: [nutrition1, nutrition2, nutrition3],
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=RAQwWx4mXTk" },
      { label: "Frontend", href: "https://github.com/jaym832/phase3-frontend" },
      { label: "Backend", href: "https://github.com/jaym832/phase3-backend" },
    ],
  },
  {
    slug: "war",
    title: "War Card Game",
    eyebrow: "Hackathon build",
    image: war,
    year: "Collaborative build",
    summary:
      "A browser-based card simulation where users compete across rounds, draw cards, and race to win the match.",
    objective:
      "Ship a collaborative browser application under hackathon constraints with clear rules, scoring, and deployment.",
    role:
      "Focused on application logic, UI styling, and deploying the final application to Netlify.",
    result:
      "Shows rule modeling, team collaboration, and a bias toward shipping.",
    stack: ["React", "Material UI", "REST API", "Axios", "Netlify"],
    highlights: [
      "Implemented rule logic for rounds, cards, scoring, and win states.",
      "Shipped under hackathon constraints with a small team.",
      "Deployed a playable public version with code available for review.",
    ],
    screenshots: [war1, war2, war3, war4],
    links: [
      { label: "Code", href: "https://github.com/mnopprapun/cardgame" },
      { label: "Website", href: "https://upbeat-colden-3d0b2b.netlify.app/" },
    ],
  },
];

export const impactStats = [
  {
    value: "$6M",
    label: "revenue influenced",
    title: "Partial-pay commerce module",
    detail:
      "Collaborated on an online partial-pay option for custom countertop sales in partial-pay states, generating $6M in revenue and covering 10% of total countertop sales.",
  },
  {
    value: "75%",
    label: "fewer install errors",
    title: "Window-treatment design builder",
    detail:
      "Launched an in-store design builder for window treatments that streamlined contractor workflows, improved customer satisfaction, and reduced installation errors by 75%.",
  },
  {
    value: "40%",
    label: "faster handling time",
    title: "Internal operations tooling",
    detail:
      "Optimized internal systems with real-time data tracking, customizable dashboards, and enhanced search capabilities, reducing average handling time by 40%.",
  },
];

export const profileFacts = [
  { label: "Experience", value: "4+ years" },
  { label: "Current", value: "Software Engineer, The Home Depot" },
  { label: "Focus", value: "Revenue-driving customer-facing systems at scale" },
  { label: "Strengths", value: "Frontend architecture, backend integrations, system optimization" },
  { label: "Location", value: "Houston, TX" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Redux", "JavaScript", "Vue", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Java", "Spring Boot", "Ruby on Rails", "ASP.NET", "C#"],
  },
  {
    title: "Data & APIs",
    items: ["SQL", "GraphQL", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Delivery & Observability",
    items: ["AWS", "New Relic", "Octopus Deploy", "TeamCity", "Docker", "Splunk", "CI/CD"],
  },
  {
    title: "Testing & Build",
    items: ["Vite", "Webpack", "Storybook", "Jest"],
  },
];

export const resumeSnapshot = [
  {
    title: "Current scope",
    body:
      "Complex, multi-team platforms at The Home Depot across customer-facing workflows, internal systems, and integrations.",
  },
  {
    title: "Engineering lane",
    body:
      "Performant frontend architecture, backend integrations, and system optimization for measurable business outcomes.",
  },
  {
    title: "Operating style",
    body:
      "Known for translating ambiguous requirements into scalable solutions that product and operations teams can actually use.",
  },
];

export const commandActions = [
  { command: "impact", description: "Show revenue and workflow wins", target: "/#impact" },
  { command: "stack", description: "Inspect the engineering toolchain", target: "/#stack" },
  { command: "projects", description: "Open public case studies", target: "/portfolio" },
  { command: "resume", description: "Review the latest resume PDF", target: "resume" },
  { command: "contact", description: "Start a conversation", target: "/contact" },
];

export const personalityCards = [
  {
    title: "Interactive systems",
    body:
      "I like learning how complex systems behave, spotting patterns, and improving the loop over time.",
  },
  {
    title: "Reading",
    body:
      "Books scratch the same itch as good docs: they make a bigger world click into place.",
  },
  {
    title: "Movies",
    body:
      "I pay attention to pacing, tone, and how small details make a moment land.",
  },
  {
    title: "Technology",
    body:
      "I enjoy tinkering with tools, patterns, and ideas that make building feel sharper.",
  },
];

export const experience = [
  {
    period: "Apr '22 - Present",
    company: "The Home Depot",
    location: "Houston, TX",
    role: "Software Engineer",
    summary:
      "Building revenue-driving, customer-facing systems at scale across complex, multi-team platforms.",
    bullets: [
      "Collaborated on an online partial-pay option for custom countertop sales in partial-pay states, generating $6M in revenue and covering 10% of total countertop sales.",
      "Launched an in-store design builder tool for window treatments that streamlined contractor workflows, improved customer satisfaction, and reduced installation errors by 75%.",
      "Optimized internal systems by building real-time data tracking, customizable dashboards, and enhanced search capabilities, reducing average handling time by 40%.",
    ],
    stack: ["React", "Redux", "Java", "Spring Boot", "GraphQL", "AWS", "New Relic"],
  },
  {
    period: "Aug '17 - Oct '18",
    company: "Red Wing Shoe Co.",
    location: "Houston, TX",
    role: "Sales Associate",
    summary:
      "Built early customer-facing instincts through revenue ownership, communication, and product presentation.",
    bullets: [
      "Boosted sales revenue by 30% by keeping merchandise organized and presented to drive customer interest.",
      "Used communication and rapport-building to close sales and meet targets.",
      "Partnered with retail representatives to optimize sales by 25% through improved product presentations and advertising collateral.",
    ],
    stack: ["Customer discovery", "Sales", "Communication", "Product presentation"],
  },
];

export const education = [
  {
    school: "University of Houston",
    period: "May '22",
    credential: "Bachelor of Science, Computer Information Systems",
  },
  {
    school: "Flatiron School",
    period: "Jul '21",
    credential: "Full Stack Web Development, Ruby on Rails and JavaScript program",
  },
  {
    school: "Lone Star College",
    period: "Aug '15",
    credential: "Associate of Arts",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export default projects;
