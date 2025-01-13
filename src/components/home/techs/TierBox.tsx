import styles from './tier-box.module.scss';
import TechImage from './TechImage';
import type Tech from '@utils/interfaces/tech.interface';

interface Props {
  tier: number;
  techs: Tech[];
}

const TierBox = ({ tier, techs }: Props) => {
  return (
    <div className={`${styles.tierBox}`}>
      <div className={`${styles.tierTitle} ${styles[tier]}`}>
        <p>FAVORITES</p>
      </div>
      <div className={`${styles.imagesBox}`}>
        {techs.map((t, index) => (
          <TechImage key={index} tech={t} />
        ))}
      </div>
    </div>
  );
};

export default TierBox;
