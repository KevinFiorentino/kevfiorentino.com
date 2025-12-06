import { useState, useRef } from 'react';
import { useTranslations } from '@i18n/utils';
import ReactDOM from "react-dom";
import styles from './styles.module.scss';
import type { Tech } from '@utils/interfaces/tech.interface';

interface Props {
  tech: Tech;
  currentLang: string;
  isSoftSkills?: boolean;
}

const TechComponent = ({ tech, currentLang, isSoftSkills }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const t = useTranslations(currentLang as 'en' | 'es');

  const DROPDOWN_WIDTH = 400;
  const SIDE_MARGIN = 10;

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      let left = rect.left - 100;
      const top = rect.bottom;

      // Ajuste si se pasa del lado izquierdo
      if (left < SIDE_MARGIN) {
        left = SIDE_MARGIN;
      }

      // Ajuste si se pasa del lado derecho
      if (left + DROPDOWN_WIDTH > viewportWidth - SIDE_MARGIN) {
        left = viewportWidth - DROPDOWN_WIDTH - SIDE_MARGIN;
      }

      setDropdownPosition({ top, left });
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.techImage} ${isSoftSkills ? styles.ssImage : ''}`} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
              {!isSoftSkills &&
                <img src={tech.image} alt={`${tech.tech} logo`} />
              }
              <div className='tech-info'>
                <h4>{ tech.tech }</h4>
                {!isSoftSkills &&
                  <>
                    <h5>{t('description')}</h5>
                    <p>{ currentLang == 'es' ? tech.description.es : tech.description.en }</p>
                  </>
                }
              </div>
            </div>
            <div className='tech-bottom'>
              <div className='tech-info'>
                {!isSoftSkills &&
                  <h5>{t('comment')}</h5>
                }
                <p
                  dangerouslySetInnerHTML={{ __html: currentLang == 'es' ? tech.comment.es : tech.comment.en  }}
                >
                </p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center flex-wrap gap-1'>
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
