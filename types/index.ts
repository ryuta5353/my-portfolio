export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
