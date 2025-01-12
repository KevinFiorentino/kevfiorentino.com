import styles from './tech-box.module.scss';
import React from 'react';
import TechImage from './TechImage';
import type TechBox from '@utils/interfaces/tech-box.interface';

interface Props {
  techBox: TechBox;
}

const TechsBox: React.FC<Props> = ({ techBox }) => {
  return (
    <div className={`${styles.techsBox}`}>
      <div className={`${styles.techTitle}`}>
        <img src={`/tech-headers/${techBox.headerImage}`} alt="Front-End" />
      </div>
      <div className={`${styles.imagesBox}`}>
        {techBox.techs.map((t, index) => (
          <TechImage key={index} tech={t} />
        ))}
      </div>
    </div>
  );
};

export default TechsBox;
