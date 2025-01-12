import styles from './tech-image.module.scss';
import React from 'react';
import type Tech from '@utils/interfaces/tech.interface';

interface Props {
  tech: Tech;
}

const TechComponent: React.FC<Props> = ({ tech }) => {
  return (
    <div className={`${styles.techImage}`}>
      <img src={tech.image} alt={`${tech.tech} logo`} />
    </div>
  );
};

export default TechComponent;
