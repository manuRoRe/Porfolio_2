export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  desktopImage: string;
  mobileImage?: string;
}
