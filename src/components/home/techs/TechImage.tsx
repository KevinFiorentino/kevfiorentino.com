import { useState, useRef } from 'react';
import { useTranslations } from '@i18n/utils';
import ReactDOM from "react-dom";
import styles from './styles.module.scss';
import type { Tech } from '@utils/interfaces/tech.interface';

interface Props {
  tech: Tech;
  currentLang: string;
}

const TechComponent = ({ tech, currentLang }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const t = useTranslations(currentLang as 'en' | 'es');

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left,
      });
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.techImage}`} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={tech.image} alt={`${tech.tech} logo`} />
      {isHovered && (
        ReactDOM.createPortal(
          <div
            className="tech-dropdown flex justify-center align-center flex-col"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
            }}
          >
            <div className='tech-header'>
              <img src={tech.image} alt={`${tech.tech} logo`} />
              <div className='tech-info'>
                <h4>{ tech.tech }</h4>
                <h5>What is it?</h5>
                <p>{ currentLang == 'es' ? tech.description.es : tech.description.en }</p>
              </div>
            </div>
            <div className='tech-bottom'>
              <div className='tech-info'>
                <h5>Why or when I use it?</h5>
                <p>{ currentLang == 'es' ? tech.comment.es : tech.comment.en }</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    {tech.years.map((y) => <span className='capitalize'>{y}</span> )}
                  </div>
                  <span className={`${tech.tier}`}>
                    {t(tech.tier)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        , document.body)
      )}
    </div>
  );
};

export default TechComponent;
