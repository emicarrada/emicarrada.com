import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
// @ts-expect-error Header is JSX
import Header from '../Header';
// @ts-expect-error Footer is JSX
import Footer from '../Footer';
import { getProjectCaseStudy } from '@/constants/projectCaseStudies';
import { ProjectCaseStudyView } from '@/components/features/projects/caseStudy/ProjectCaseStudyView';

export default function ProjectCaseStudyPage() {
  const { projectId, studySlug } = useParams<{ projectId: string; studySlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId, studySlug]);

  if (!projectId || !studySlug) {
    return <Navigate to="/proyectos" replace />;
  }

  const study = getProjectCaseStudy(projectId, studySlug);

  if (!study) {
    return <Navigate to="/proyectos" replace />;
  }

  return (
    <>
      <Header />
      <ProjectCaseStudyView study={study} />
      <Footer />
    </>
  );
}
