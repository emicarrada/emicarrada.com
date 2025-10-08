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

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[]; // Technology names
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status: ProjectStatus;
  category: ProjectCategory;
  featured: boolean;
  completedAt?: Date;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export type ProjectCategory = 
  | 'web'
  | 'mobile'
  | 'desktop'
  | 'api'
  | 'library'
  | 'other';

export interface ProjectCardProps {
  project: Project;
  className?: string;
  onClick?: (project: Project) => void;
}

export interface TechBadgeProps {
  technology: Technology;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}