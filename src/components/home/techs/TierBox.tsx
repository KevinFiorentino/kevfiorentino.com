import styles from './tier-box.module.scss';
import TechImage from './TechImage';
import type { Tech } from '@utils/interfaces/tech.interface';

interface Props {
  tier: number;
  techs: Tech[];
  currentLang: string;
}

const TierBox = ({ tier, techs, currentLang }: Props) => {
  return (
    <div className={`${styles.tierBox}`}>
      <div className={`${styles.tierTitle} ${styles[tier]}`}>
        <img src={`/tier-texts/${tier}.svg`} alt="" />
      </div>
      <div className={`${styles.imagesBox}`}>
        {techs.map((t, index) => (
          <TechImage
            key={index}
            tech={t}
            currentLang={currentLang}
          />
        ))}
      </div>
    </div>
  );
};

export default TierBox;
