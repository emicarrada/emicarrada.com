import { useState, useEffect } from 'react';
import { Project } from '../types/projects';
import { ProjectsService } from '../services/data/ProjectsService';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const projectsService = new ProjectsService();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await projectsService.getAllProjects();
        setProjects(projectsData);
        setError(null);
      } catch (err) {
        setError('Error al cargar los proyectos');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch: () => {
      const loadProjects = async () => {
        try {
          setLoading(true);
          const projectsData = await projectsService.getAllProjects();
          setProjects(projectsData);
          setError(null);
        } catch (err) {
          setError('Error al cargar los proyectos');
        } finally {
          setLoading(false);
        }
      };
      loadProjects();
    }
  };
};