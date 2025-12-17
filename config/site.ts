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
  avatar: "/me.png",
  ogImage: "/me.png",
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
  // Programming languages
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "JavaScript", icon: "/stack/javascript.svg" },
  { name: "Python", icon: "/stack/python.svg" },
  { name: "Ruby", icon: "/stack/ruby.svg" },
  // Frameworks
  { name: "React", icon: "/stack/react.svg" },
  { name: "Next.js", icon: "/stack/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/stack/tailwindcss.svg" },
  { name: "NestJS", icon: "/stack/nestjs.svg" },
  { name: "Ruby on Rails", icon: "/stack/rubyonrails.svg" },
  // Infrastructures
  { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
  { name: "AWS", icon: "/stack/aws.svg" },
  { name: "Supabase", icon: "/stack/supabase.png" },
  { name: "Convex", icon: "/stack/convex.png" },
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
