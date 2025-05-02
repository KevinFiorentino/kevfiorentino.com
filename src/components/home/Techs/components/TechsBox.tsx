import styles from './styles.module.scss';
import TechImage from './TechImage';
import type { TechBox } from '@utils/interfaces/tech-box.interface';

interface Props {
  techBox: TechBox;
  currentLang: string;
  isSoftSkills?: boolean;
}

const TechsBox = ({ techBox, currentLang, isSoftSkills }: Props) => {
  return (
    <div className={`${styles.techsBox} ${isSoftSkills ? styles.softSkills : ''}`}>
      <div className={`${styles.techTitle}`}>
        <img src={`/tech-headers/${techBox.headerImage}`} alt={techBox.name} />
      </div>
      <div className={`${styles.imagesBox}`}>
        {techBox.techs.map((t, i) => (
          <TechImage
            key={i}
            tech={t}
            currentLang={currentLang}
            isSoftSkills={isSoftSkills}
          />
        ))}
      </div>
    </div>
  );
};

export default TechsBox;
