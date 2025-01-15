import { useState, useRef } from 'react';
import ReactDOM from "react-dom";
import styles from './tech-image.module.scss';
import type { Tech } from '@utils/interfaces/tech.interface';

interface Props {
  tech: Tech;
}

const TechComponent = ({ tech }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='tech-bottom'>
              <div className='tech-info'>
                <h5>Why or when I use it?</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor amet.</p>
              </div>
            </div>
          </div>
        , document.body)
      )}
    </div>
  );
};

export default TechComponent;
