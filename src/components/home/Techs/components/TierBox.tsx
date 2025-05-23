import styles from './styles.module.scss';
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
        <img src={`/tier-texts/${tier}.svg`} alt={`${tier}`} />
      </div>
      <div className={`${styles.imagesBox}`}>
        {techs.map((t, i) => (
          <TechImage
            key={i}
            tech={t}
            currentLang={currentLang}
          />
        ))}
      </div>
    </div>
  );
};

export default TierBox;
