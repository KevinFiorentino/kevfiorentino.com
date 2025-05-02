import { useState } from 'react';
import type { Project } from "@utils/interfaces/project.interface";
import ReactDOM from "react-dom";
import styles from './styles.module.scss';
import ProjectModal from './ProjectModal';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.projectCard}>
        <button onClick={() => {setShowModal(!showModal)}}>
          <img src={`/projects/${project.images[0]}`} alt={project.title} />
        </button>
      </div>

      {showModal && (
        ReactDOM.createPortal(
          <ProjectModal
            project={project}
            setShowModal={setShowModal}
          ></ProjectModal>
        , document.body)
      )}
    </>

  );
}

export default ProjectCard;
