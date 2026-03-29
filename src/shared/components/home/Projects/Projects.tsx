import styles from './styles.module.scss';
import { useTranslations } from '@shared/i18n/utils';
import ProjectCard from './components/ProjectCard';
import type { Project } from "@shared/utils/interfaces/project.interface";

import { projectsData, aiProjectsData } from '@shared/data/projects/projects-data';

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
          {projectsData.map((p: Project, i: number) => (
            <ProjectCard
              key={i}
              project={p}
              currentLang={currentLang}
            ></ProjectCard>
          ))}
        </div>
      </div>

      <div className={`main-width z-10`}>
        <h2 className="text-white">
          AI & Vibe Conding
        </h2>
        <hr className="hr mt-2 mb-0" />
        <br />
        <div className={`${styles.projectWrapper}`}>
          {aiProjectsData.map((p: Project, i: number) => (
            <ProjectCard
              key={i}
              project={p}
              currentLang={currentLang}
            ></ProjectCard>
          ))}
        </div>
        <br /><br /><br />
      </div>

    </section>
  );
}

export default Projects;
