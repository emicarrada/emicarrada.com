import { ProjectCaseStudy } from '@/types/caseStudy';
import { chiikoCaseStudy } from './chiiko';
import { verazCaseStudy } from './veraz';

const caseStudiesByKey: Record<string, ProjectCaseStudy> = {
  [`${chiikoCaseStudy.projectId}/${chiikoCaseStudy.slug}`]: chiikoCaseStudy,
  [`${verazCaseStudy.projectId}/${verazCaseStudy.slug}`]: verazCaseStudy,
};

export function getProjectCaseStudy(
  projectId: string,
  slug: string,
): ProjectCaseStudy | null {
  return caseStudiesByKey[`${projectId}/${slug}`] ?? null;
}

export function getCaseStudyPathForProject(projectId: string): string | null {
  const study = Object.values(caseStudiesByKey).find((s) => s.projectId === projectId);
  if (!study) return null;
  return `/proyectos/${study.projectId}/${study.slug}`;
}

export function listCaseStudies(): ProjectCaseStudy[] {
  return Object.values(caseStudiesByKey);
}
