import styles from './styles.module.scss';
import { useState } from 'react';
import { useTranslations } from '@i18n/utils';
import ProjectCard from './components/ProjectCard';
import type { Project } from "@utils/interfaces/project.interface";

import { projectsDataES } from '@utils/projects/projects-data';

interface Props {
  currentLang: string;
}

const Projects = ({ currentLang }: Props) => {
  const t = useTranslations(currentLang as 'en' | 'es');

  return (
    <section className={`${styles.projects}`}>
      <div className={`main-width z-10`}>
        <h2 className="text-white">{t('projects')}</h2>
        <hr className="hr mt-2 mb-0" />
        <br />

        <div className={`${styles.projectWrapper}`}>
          {projectsDataES.map((p: Project) => (
            <ProjectCard
              project={p}
              currentLang={currentLang}
            ></ProjectCard>
          ))}
        </div>

        <br /><br /><br /><br /><br />

      </div>
    </section>
  );
}

export default Projects;
