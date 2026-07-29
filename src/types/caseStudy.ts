export type CaseStudyIconId =
  | 'layers'
  | 'stack'
  | 'flow'
  | 'globe'
  | 'seo'
  | 'content'
  | 'experience'
  | 'deploy'
  | 'brand'
  | 'craft'
  | 'map'
  | 'summary';

export interface CaseStudyStackRow {
  layer: string;
  tech: string;
  role: string;
}

export interface CaseStudyBrandRow {
  use: string;
  form: string;
  where: string;
}

export interface CaseStudySection {
  id: string;
  icon: CaseStudyIconId;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  stackRows?: CaseStudyStackRow[];
  flow?: string;
  brandRows?: CaseStudyBrandRow[];
  codeTree?: string;
  note?: string;
}

export interface ProjectCaseStudy {
  projectId: string;
  slug: string;
  displayName: string;
  title: string;
  subtitle: string;
  summaryLine: string;
  sections: CaseStudySection[];
}
