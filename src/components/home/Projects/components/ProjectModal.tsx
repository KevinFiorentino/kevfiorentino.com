import { useState } from 'react';
import { useCloseDropdown } from '@utils/hooks/useCloseDropdown';
import type { Project } from "@utils/interfaces/project.interface";
import styles from './styles.module.scss';
import DOMPurify from "isomorphic-dompurify";

interface Props {
  project: Project;
  currentLang: string;
  setShowModal: (i: boolean) => void;
}

const ProjectModal = ({ project, currentLang, setShowModal }: Props) => {

  const { dropdownRef } = useCloseDropdown<HTMLDivElement>({
    setOpen: setShowModal,
    options: {
      closeOutside: true,
      closeEsc: true,
    },
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const sanitizedHTML = DOMPurify.sanitize(project.description);

  return (
    <div className={styles.projectModal}>
      <div className={styles.modalContainer} ref={dropdownRef}>
        <div className={styles.projectLayout}>

          <div className={styles.projectImage}>
            <div className={styles.mainImage}>
              <img src={project.images[activeIndex]} alt={project.title} />
              <div className={styles.carousel}>
                {project.images.map((i: string, k: number) => (
                  <button
                    key={k}
                    onClick={() => setActiveIndex(k)}
                    className={activeIndex == k ? styles.active : undefined}
                  ></button>
                ))}
              </div>
            </div>
            <div className={styles.visit}>
              {project.url ? (
                <a href={project.url} title={project.title} target='_blank'>
                  { currentLang == 'en' ? 'Visit site' : 'Visitar sitio' }
                </a>
              ) : (
                <span>
                  { currentLang == 'en' ? 'Private access' : 'Acceso privado' }
                </span>
              )}
            </div>
            <div className={styles.techs}>
              {project.techs.map((i: string, k: number) => (
                <img
                  key={k}
                  src={i}
                  alt={i.split("/")[3].replace(".png", "")}
                  title={i.split("/")[3].replace(".png", "")}
                />
              ))}
            </div>
          </div>

          <div className={styles.projectInfo}>
            <h3>{ project.title }</h3>
            <h4>{ project.position }</h4>
            <span>
              <i>{ project.date }</i>
            </span>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}>
            </div>
          </div>

        </div>

        <div className={styles.close}>
          <button onClick={() => setShowModal(false)}>
            <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#1C1F21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 1L1 21M1 1L21 21" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProjectModal;
