import styles from './styles.module.scss';
import { useState } from 'react';
import { techWrapper } from '@utils/tech-wrapper';
import type { TechBox } from '@utils/interfaces/tech-box.interface';
import type { TierResponse } from '@utils/interfaces/tier.interface';
import TechsBox from './techs/TechsBox';
import TierBox from './techs/TierBox';

interface Props {
  currentLang: string;
}

const TechJourney = ({ currentLang }: Props) => {
  const [selected, setSelected] = useState<string>('all');
  const [techData, setTechData] = useState<TechBox[]>(techWrapper);
  const [tierData, setTierData] = useState<TierResponse>();
  const [viewType, setViewType] = useState<'tech' | 'tier'>('tech');
  const [loading, setLoading] = useState<boolean>(false);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const handleTechBtn = async (filter: string) => {
    if (firstRender) {
      setLoading(true);
    }
    setSelected(filter);

    try {
      const response = await fetch(`/api/techs?filter=${filter}`);
      const data = await response.json();

      if (filter === 'tier') {
        setViewType('tier');
        setTierData(data.data);
      } else {
        setViewType('tech');
        setTechData(data.data);
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setFirstRender(false);
    }
  };

  return (
    <section className={`${styles.bgTechs} bg-polygon relative`}>
      <div className="main-width relative z-10">
        <h2 className="text-white text-center">Tech Journey</h2>
        <br />
        <div className={`${styles.btnTechs}`}>
          <button className={`${selected === 'uni' && styles.active}`} onClick={() => handleTechBtn('uni')}>Uni 🏫</button>
          <button className={`${selected === '2017' && styles.active}`} onClick={() => handleTechBtn('2017')}>2017</button>
          <button className={`${selected === '2018' && styles.active}`} onClick={() => handleTechBtn('2018')}>2018</button>
          <button className={`${selected === '2019' && styles.active}`} onClick={() => handleTechBtn('2019')}>2019</button>
          <button className={`${selected === '2020' && styles.active}`} onClick={() => handleTechBtn('2020')}>2020</button>
          <button className={`${selected === '2021' && styles.active}`} onClick={() => handleTechBtn('2021')}>2021</button>
          <button className={`${selected === '2022' && styles.active}`} onClick={() => handleTechBtn('2022')}>2022</button>
          <button className={`${selected === '2023' && styles.active}`} onClick={() => handleTechBtn('2023')}>2023</button>
          <button className={`${selected === '2024' && styles.active}`} onClick={() => handleTechBtn('2024')}>2024</button>
          <button className={`${selected === 'all' && styles.active}`} onClick={() => handleTechBtn('all')}>All 💻</button>
          <button className={`${selected === 'tier' && styles.active}`} onClick={() => handleTechBtn('tier')}>Tier 🩵</button>
        </div>
        <br />
        <p className={`${styles.text}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum malesuada eleifend. Cras a velit dolor. Fusce augue purus, fringilla iaculis rhoncus vitae, convallis sit amet purus. Integer ornare, lacus ut eleifend tincidunt, neque eros congue nisl, in dignissim augue velit et tortor.
        </p>
        <br />
        {firstRender && !loading && (
          <button onClick={() => handleTechBtn('all')}>
            Let's explore!
          </button>
        )}
        {loading && (
          <div className={styles.skeletonWrapper}>
            <div className={styles.skeletonBox}>
              <div className={styles.skeletonTitle}>
                <img src={`/loading.svg`} />
              </div>
            </div>
            <div className={styles.skeletonBox}>
              <div className={styles.skeletonTitle}>
                <img src={`/loading.svg`} />
              </div>
            </div>
            <div className={styles.skeletonBox}>
              <div className={styles.skeletonTitle}>
                <img src={`/loading.svg`} />
              </div>
            </div>
          </div>
        )}
        {
          !loading && !firstRender && viewType === 'tech' && (
            <div className={`${styles.techMainBox} flex flex-wrap justify-center items-center`}>
              {
                techData.map((box: any, index: number) => (
                  <TechsBox
                    key={index}
                    techBox={box}
                    currentLang={currentLang}
                  />
                ))
              }
            </div>
          )
        }
        {
          !loading && !firstRender && viewType === 'tier' && (
            <div className={styles.tierMainBox}>
              {
                tierData?.tiers.map((tier: any, index: number) => (
                  <TierBox
                    key={index}
                    tier={tier.tier}
                    techs={tier.techs}
                    currentLang={currentLang}
                  ></TierBox>
                ))
              }
            </div>
          )
        }
      </div>
    </section>
  );
};

export default TechJourney;
