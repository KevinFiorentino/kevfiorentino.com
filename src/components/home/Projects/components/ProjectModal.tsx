import styles from './styles.module.scss';
import { useState } from 'react';
import { useCloseDropdown } from '@utils/hooks/useCloseDropdown';
import type { Project } from "@utils/interfaces/project.interface";

interface Props {
  project: Project;
  setShowModal: (i: boolean) => void;
}

const ProjectModal = ({ project, setShowModal }: Props) => {

  const { dropdownRef } = useCloseDropdown<HTMLDivElement>({
    setOpen: setShowModal,
    options: {
      closeOutside: true,
      closeEsc: true,
    },
  });

  return (
    <div className={styles.projectModal}>
      <div className={styles.modalContainer} ref={dropdownRef}>

        <div className={styles.projectLayout}>
          <div className={styles.projectImage}>
            <img src={`/projects/${project.images[0]}`} alt={project.title} />
          </div>
          <div className={styles.projectInfo}>
            <h3>{ project.title }</h3>
            <h4>{ project.position }</h4>
            <span>
              <i>{ project.date }</i>
            </span>
            <p>
              Nunc maximus posuere commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae mi elit. Donec porttitor neque vitae nibh posuere pretium. Sed lacinia lorem sed lacus sollicitudin varius. Integer non nisl purus. Nunc posuere fringilla lobortis.
            </p>
          </div>
        </div>

        {/* <div className={styles.close}>
          <button onClick={() => setShowModal(false)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#1C1F21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 1L1 21M1 1L21 21" />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectModal;
