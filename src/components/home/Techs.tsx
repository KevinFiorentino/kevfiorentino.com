import styles from './techs.module.scss';
import { useState } from 'react';
import { techWrapper } from '@utils/tech-wrapper';
import type { TechBox } from '@utils/interfaces/tech-box.interface';
import type { TierResponse } from '@utils/interfaces/tier.interface';
import TechsBox from './techs/TechsBox';
import TierBox from './techs/TierBox';

const TechJourney = () => {
  const [techData, setTechData] = useState<TechBox[]>(techWrapper);
  const [tierData, setTierData] = useState<TierResponse>();
  const [viewType, setViewType] = useState<'tech' | 'tier'>('tech');
  const [loading, setLoading] = useState<boolean>(false);

  const handleTechBtn = async (filter: string) => {
    setLoading(true);

    try {
      const response = await fetch(`/api/techs?filter=${filter}`);
      const data = await response.json();
      console.log(data)

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
    }
  };

  return (
    <section className={`${styles.bgTechs} bg-polygon relative`}>
      <div className="main-width relative z-10">
        <h2 className="text-white text-center">Tech Journey</h2>
        <br />
        <div className={`${styles.btnTechs}`}>
          <button onClick={() => handleTechBtn('uni')}>Uni 🏫</button>
          <button onClick={() => handleTechBtn('2017')}>2017</button>
          <button onClick={() => handleTechBtn('2018')}>2018</button>
          <button onClick={() => handleTechBtn('2019')}>2019</button>
          <button onClick={() => handleTechBtn('2020')}>2020</button>
          <button onClick={() => handleTechBtn('2021')}>2021</button>
          <button onClick={() => handleTechBtn('2022')}>2022</button>
          <button onClick={() => handleTechBtn('2023')}>2023</button>
          <button onClick={() => handleTechBtn('2024')}>2024</button>
          <button className={`${styles.active}`} onClick={() => handleTechBtn('all')}>All 💻</button>
          <button onClick={() => handleTechBtn('tier')}>Tier 🩵</button>
        </div>
        <br />
        <p className={`${styles.text}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum malesuada eleifend. Cras a velit dolor. Fusce augue purus, fringilla iaculis rhoncus vitae, convallis sit amet purus. Integer ornare, lacus ut eleifend tincidunt, neque eros congue nisl, in dignissim augue velit et tortor.
        </p>
        <br />
        {
          !loading && viewType === 'tech' && (
            <div className={`${styles.techMainBox} flex flex-wrap justify-center items-center`}>
              {
                techData.map((box: any, index: number) => (
                  <TechsBox key={index} techBox={box} />
                ))
              }
            </div>
          )
        }
        {
          !loading && viewType === 'tier' && (
            <div className={styles.tierMainBox}>
              {
                tierData?.tiers.map((tier: any, index: number) => (
                  <TierBox
                    tier={tier.tier}
                    techs={tier.techs}
                    key={index}
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
