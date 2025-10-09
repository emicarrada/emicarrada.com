// @ts-ignore
import Header from './Header';
// @ts-ignore
import Footer from './Footer';
import { ProjectsSection } from './features/projects/ProjectsSection';

/**
 * Componente principal de la página de Proyectos
 * Utiliza la nueva arquitectura modularizada con features
 */
export default function Proyectos() {
  return (
    <>
      <Header />
      <ProjectsSection />
      <Footer />
    </>
  );
}