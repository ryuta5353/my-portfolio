import { Skill, Project, SocialLink } from "@/types";

export const profile = {
  name: "池尻 隆太",
  nameEn: "Ryuta Ikejiri",
  title: "芝浦工業大学 電子情報システム専攻",
  catchphrase: "Building the Future with Code",
  about: `エンジニアを目指している大学生です。
現在は自動プログラム修正（APR）の研究に取り組んでおり、LLMやグラフ構造を用いた手法に興味があります。
プログラミングを通じて社会に貢献できるエンジニアを目指しています。`,
};

export const skills: Skill[] = [
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "LLM Research", level: 70, category: "other" },
  { name: "Git", level: 75, category: "other" },
];

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Next.js と Tailwind CSS を使用したポートフォリオサイト。モダンなデザインとアニメーションを実装。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
  },
  {
    id: "apr-research",
    title: "APR Research Project",
    description:
      "LLMとグラフ構造を用いた自動プログラム修正の研究。バグ修正の自動化を目指す。",
    technologies: ["Python", "PyTorch", "LLM", "Graph Neural Networks"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "github",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/username",
    icon: "twitter",
  },
];

export const interests = ["K-Pop", "US Stock Investment", "Programming"];
