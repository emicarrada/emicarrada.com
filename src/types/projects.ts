export interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: TechnologyCategory;
}

export type TechnologyCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'design'
  | 'mobile'
  | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export type ProjectCategory = 
  | 'web'
  | 'mobile'
  | 'desktop'
  | 'api'
  | 'library'
  | 'other';

export interface TechIcon {
  id: string;
  name: string;
  title: string;
  svgContent: string;
}

export interface Project {
  id: string;
  name: string;
  logo: string;
  paragraphs: string[];
  github: string;
  live: string;
  technologies: string[];
  category: 'startup' | 'scientific';
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface TechBadgeProps {
  tech: TechIcon;
  className?: string;
}

export interface ProjectsListProps {
  projects: Project[];
  className?: string;
}

export interface ProjectsHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export interface IProjectsService {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  getProjectsByCategory(category: 'startup' | 'scientific'): Promise<Project[]>;
}

export interface ITechIconsService {
  getIconByName(name: string): TechIcon | null;
  getAllIcons(): TechIcon[];
}

export interface TechBadgeProps {
  tech: TechIcon;
  className?: string;
}