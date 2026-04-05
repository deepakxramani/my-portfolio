import { ReactNode } from "react";

export interface NavLink {
  id: number;
  link: string;
}

export interface Portfolio {
  id: number;
  name: string;
  title: string;
  description: string;
  technologies: string[];
  src: string;
  demolink: string;
  videolink: string;
  codelink: string;
}

export interface Technology {
  id: number;
  src: string;
  title: string;
  style: string;
  category: "frontend" | "backend" | "tools";
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  role?: string;
  duration: string;
  icon: ReactNode;
  type: "professional" | "education";
  status: "current" | "completed";
}

export interface SocialLink {
  id: number;
  child: ReactNode;
  href: string;
  style?: string;
  download?: boolean;
}

export interface TechIcon {
  icon: ReactNode;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  icon: ReactNode;
  count: number;
}
