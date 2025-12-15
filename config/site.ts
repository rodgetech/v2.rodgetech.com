export const USER = {
  firstName: "Luis",
  lastName: "Rodriguez",
  displayName: "Luis Rodge",
  username: "rodgetech",
  gender: "male",
  bio: "Creating with code. Small details matter.",
  longBio: `
  I'm a software engineer from Belize, Central America. I'm very passionate about building web and mobile apps. I work mostly with Typescript, React, and React Native but I'm always looking to learn new technologies I've been coding for so long now, you can just look at my GitHub timeline to see how long I've been at it.

  `,
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
  ],
  address: "Cayo, Belize, Central America",
  phoneNumber: "+5016082077",
  email: "rodgetech@gmail.com",
  website: "https://rodgetech.com",
  jobTitle: "Software Engineer",

  about: `
- **Design Engineer** with **5+ years of experience**, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [ZaDark](https://zadark.com) (2022): enhances the Zalo experience on PC & Web
  - **80k+ downloads** on [SourceForge](https://sourceforge.net/projects/zadark)
  - **30k+ active users** on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob)
- Creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com): iOS-like wheel picker with inertia scrolling & infinite loop
  - **10k+ weekly downloads** on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker)
  - [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1764345394",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "America/Belize",
  keywords: ["rodgetech", "luis rodriguez", "luis", "rodriguez"],
  dateCreated: "2025-12-14", // YYYY-MM-DD
};

export const SITE_INFO = {
  name: USER.displayName,
  url: "https://rodgetech.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const GITHUB_USERNAME = "rodgetech";

export const SOCIAL_LINKS = {
  x: {
    name: "X (formerly Twitter)",
    url: "https://x.com/rodgetech",
    username: "@rodgetech",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rodriglu",
    username: "rodriglu",
  },
  youtube: {
    name: "YouTube",
    url: "https://youtube.com/@rodgetech",
    username: "@rodgetech",
  },
  github: {
    name: "GitHub",
    url: `https://github.com/${GITHUB_USERNAME}`,
    username: GITHUB_USERNAME,
  },
};

export const WORK_EXPERIENCE = {
  mostRecent: {
    company: "BuildShip",
    logo: "/buildship.png",
    title: "Software Engineer",
    startDate: "2023",
    endDate: "2025",
    responsibilities: [
      "Strengthened developer community through hands-on support and engaging content",
      "Created demos, community-driven templates, and hosted weekly YouTube videos",
      "Enhanced product documentation and provided direct support via email, Discord, and meetings",
      "Led community events to foster collaboration and knowledge sharing",
      "Collaborated with cross-functional teams to improve user experience on BuildShip's platform",
    ],
  },
  resumeUrl: "#", // Placeholder - update with actual resume URL
};

export const TECH_STACK = [
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "React", icon: "/stack/react.svg" },
  { name: "Next.js", icon: "/stack/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/stack/tailwindcss.svg" },
  { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
  { name: "AWS", icon: "/stack/aws.svg" },
  { name: "JavaScript", icon: "/stack/javascript.svg" },
  { name: "NestJS", icon: "/stack/nestjs.svg" },
  { name: "Python", icon: "/stack/python.svg" },
  { name: "Ruby", icon: "/stack/ruby.svg" },
  { name: "Ruby on Rails", icon: "/stack/rubyonrails.svg" },
];

export const PROJECTS = [
  {
    name: "Ext Gaps",
    description: `
      Find gaps in existing chrome extensions. 
      This is a useful tool that you can use to determine if there are any opportunities to build 
      a similar extension but with your own twist. It does this by scraping the extension reviews 
      and formulates a gap score.`,
    url: "https://extgaps.vercel.app/",
    image: "/projects/extgaps.png",
    techStack: ["Next.js", "Upstash", "Firecrawl SDK", "Vercel", "Claude Code"],
  },
  {
    name: "Screen Mockups",
    description: `A comprehensive SaaS to generate beautiful mobile app screen designs using AI. 
      You can use it to quickly generate screen designs for your app ideas, iterate on them, and export as static images or copy directly to Figma.`,
    url: "https://screenmockups.app/",
    image: "/projects/screenmockups.png",
    techStack: [
      "React",
      "Express.js",
      "Clerk",
      "Dodo",
      "Netlify",
      "OpenRouter",
      "Supabase",
      "Fly.io",
      "Cursor",
    ],
  },
];
