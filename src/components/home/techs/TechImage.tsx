import styles from './tech-image.module.scss';
import type { Tech } from '@utils/interfaces/tech.interface';

interface Props {
  tech: Tech;
}

const TechComponent = ({ tech }: Props) => {
  return (
    <div className={`${styles.techImage}`}>
      <img src={tech.image} alt={`${tech.tech} logo`} />
    </div>
  );
};

export default TechComponent;
