import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Anu Kumar - @aneurokumar",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Anu Kumar's blog, portfolio, and second brain.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles spanning biotech, literature, and society.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Work history beyond LinkedIn.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to presentations, repositories, or other websites.",
};

export const BRAIN: Metadata = {
  TITLE: "Second Brain",
  DESCRIPTION: "Notes, ideas, and evergreen knowledge.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Substack",
    HREF: "https://substack.com/@aneurokumar",
  },
  { 
    NAME: "GitHub",
    HREF: "https://github.com/aneurokumar"
  },
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/aneurokumar/",
  }
];
