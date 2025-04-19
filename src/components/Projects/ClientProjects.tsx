'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCardList from './ProjectCardList';
import Modal from '@/components/Modal';
import { projects } from '@/data/projects';
import type { Project } from '@/types/project';
import DetailProject from './DetailProject';

export default function ClientProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className='min-h-screen px-10 py-25 flex justify-center'>
        <ProjectCardList projects={projects} openModal={openModal} />
      </div>
      <AnimatePresence>
        {isOpen && selectedProject && (
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <DetailProject selectedProject={selectedProject} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
