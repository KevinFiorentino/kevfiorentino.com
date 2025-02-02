import styles from './styles.module.scss';
import { useState } from 'react';
import { useTranslations } from '@i18n/utils';
import { techWrapper } from '@utils/tech-wrapper';
import type { TechBox } from '@utils/interfaces/tech-box.interface';
import type { TierResponse } from '@utils/interfaces/tier.interface';
import TechsBox from './techs/TechsBox';
import TierBox from './techs/TierBox';

type Filter = 'uni' | '2017' | '2018' | '2019' | '2020' | '2021' | '2022' | '2023' | '2024' | '2025' | 'all' | 'tier';

interface Props {
  currentLang: string;
}

const TechJourney = ({ currentLang }: Props) => {
  const [selected, setSelected] = useState<Filter>('all');
  const [techData, setTechData] = useState<TechBox[]>(techWrapper);
  const [tierData, setTierData] = useState<TierResponse>();
  const [viewType, setViewType] = useState<'tech' | 'tier'>('tech');
  const [loading, setLoading] = useState<boolean>(false);

  const t = useTranslations(currentLang as 'en' | 'es');

  const handleTechBtn = async (filter: Filter) => {
    setLoading(true);
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
    }
  };

  return (
    <>
      <section className={`${styles.bgTechs} bg-polygon relative`}>
        <div className={`main-width relative z-10`}>
          <h2 className="text-white text-center">My Tech Journey</h2>
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
            <button className={`${selected === '2025' && styles.active}`} onClick={() => handleTechBtn('2025')}>2025</button>
            <button className={`${selected === 'all' && styles.active}`} onClick={() => handleTechBtn('all')}>All 💻</button>
            <button className={`${selected === 'tier' && styles.active}`} onClick={() => handleTechBtn('tier')}>Tier 🩵</button>
          </div>
          <br />
          <p
            className={`${styles.text}`}
            dangerouslySetInnerHTML={{ __html: t(selected) }}
          ></p>
          <br />
          {loading && (
            <div className={styles.skeletonWrapper}>
              {[1, 2, 3].map(() => (
                <div className={styles.skeletonBox}>
                  <div className={styles.skeletonTitle}>
                    <svg width="151" height="34" viewBox="0 0 151 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="white" d="M0.62 2.08H7.64V21.88H15.596L14.48 28H0.62V2.08ZM25.3815 28.36C23.2455 28.36 21.5175 28 20.1975 27.28C18.9015 26.56 17.9535 25.42 17.3535 23.86C16.7775 22.276 16.4895 20.212 16.4895 17.668C16.4895 15.124 16.7775 13.072 17.3535 11.512C17.9535 9.952 18.9015 8.812 20.1975 8.092C21.5175 7.372 23.2455 7.012 25.3815 7.012C27.5415 7.012 29.2695 7.372 30.5655 8.092C31.8615 8.812 32.7975 9.952 33.3735 11.512C33.9735 13.072 34.2735 15.124 34.2735 17.668C34.2735 20.212 33.9735 22.276 33.3735 23.86C32.7975 25.42 31.8615 26.56 30.5655 27.28C29.2695 28 27.5415 28.36 25.3815 28.36ZM25.3455 23.284C26.1615 23.284 26.7375 22.852 27.0735 21.988C27.4095 21.1 27.5775 19.672 27.5775 17.704C27.5775 15.712 27.4095 14.284 27.0735 13.42C26.7375 12.532 26.1615 12.088 25.3455 12.088C24.5535 12.088 23.9895 12.532 23.6535 13.42C23.3415 14.284 23.1855 15.712 23.1855 17.704C23.1855 19.672 23.3415 21.1 23.6535 21.988C23.9895 22.852 24.5535 23.284 25.3455 23.284ZM41.264 28.36C40.304 28.36 39.404 28.12 38.564 27.64C37.724 27.136 37.04 26.416 36.512 25.48C35.984 24.544 35.72 23.416 35.72 22.096C35.72 20.032 36.44 18.472 37.88 17.416C39.344 16.36 41.228 15.832 43.532 15.832H45.08V13.852C45.08 13.156 44.84 12.688 44.36 12.448C43.88 12.184 43.268 12.052 42.524 12.052C41.612 12.052 40.736 12.136 39.896 12.304C39.056 12.472 38.216 12.712 37.376 13.024V7.984C38.456 7.744 39.572 7.528 40.724 7.336C41.9 7.12 43.076 7.012 44.252 7.012C45.572 7.012 46.784 7.18 47.888 7.516C48.992 7.828 49.88 8.404 50.552 9.244C51.224 10.084 51.56 11.284 51.56 12.844V28H45.944L45.512 26.452C44.912 27.1 44.24 27.58 43.496 27.892C42.752 28.204 42.008 28.36 41.264 28.36ZM43.784 23.608C44.264 23.608 44.696 23.392 45.08 22.96V19.396H44.612C43.892 19.396 43.28 19.576 42.776 19.936C42.272 20.272 42.02 20.788 42.02 21.484C42.02 22.156 42.2 22.684 42.56 23.068C42.92 23.428 43.328 23.608 43.784 23.608ZM60.1682 28.36C58.8482 28.36 57.7562 28.084 56.8922 27.532C56.0522 26.956 55.3802 26.176 54.8762 25.192C54.3962 24.208 54.0482 23.104 53.8322 21.88C53.6402 20.632 53.5442 19.324 53.5442 17.956C53.5442 14.02 54.1562 11.212 55.3802 9.532C56.6282 7.852 58.4162 7.012 60.7442 7.012C61.8002 7.012 62.9762 7.228 64.2722 7.66V1.792L70.7522 0.819998V28H65.2442L64.7042 26.416C64.1762 27.016 63.5162 27.496 62.7242 27.856C61.9322 28.192 61.0802 28.36 60.1682 28.36ZM62.2922 23.32C62.5562 23.32 62.8562 23.272 63.1922 23.176C63.5282 23.08 63.8882 22.924 64.2722 22.708V12.268C63.7442 12.124 63.2522 12.052 62.7962 12.052C61.6922 12.052 60.9842 12.556 60.6722 13.564C60.3842 14.572 60.2402 16.096 60.2402 18.136C60.2402 20.032 60.3842 21.376 60.6722 22.168C60.9602 22.936 61.5002 23.32 62.2922 23.32ZM73.6353 7.3H80.1153V28H73.6353V7.3ZM73.4553 0.819998H80.2953V5.716H73.4553V0.819998ZM88.9629 8.704C90.3789 7.576 91.9149 7.012 93.5709 7.012C95.2269 7.012 96.5949 7.528 97.6749 8.56C98.7789 9.592 99.3309 11.14 99.3309 13.204V28H92.8509V14.248C92.8509 12.784 92.1909 12.052 90.8709 12.052C90.3429 12.052 89.8749 12.184 89.4669 12.448V28H82.9869V7.3H88.4949L88.9629 8.704ZM110.718 33.76C109.734 33.76 108.762 33.712 107.802 33.616C106.842 33.544 106.05 33.46 105.426 33.364C104.802 33.292 104.49 33.256 104.49 33.256V28.36C105.306 28.456 106.05 28.528 106.722 28.576C107.418 28.648 108.138 28.684 108.882 28.684C109.938 28.684 110.754 28.48 111.33 28.072C111.906 27.688 112.194 27.052 112.194 26.164V25.048C111.114 26.056 109.722 26.56 108.018 26.56C106.722 26.56 105.642 26.308 104.778 25.804C103.938 25.276 103.278 24.568 102.798 23.68C102.318 22.768 101.97 21.748 101.754 20.62C101.562 19.468 101.466 18.268 101.466 17.02C101.466 13.42 102.066 10.852 103.266 9.316C104.49 7.78 106.254 7.012 108.558 7.012C110.262 7.012 111.642 7.576 112.698 8.704L113.166 7.3H118.674V25.48C118.674 28.24 117.978 30.304 116.586 31.672C115.218 33.064 113.262 33.76 110.718 33.76ZM110.214 21.88C110.478 21.88 110.778 21.844 111.114 21.772C111.45 21.676 111.81 21.532 112.194 21.34V12.232C111.93 12.184 111.666 12.148 111.402 12.124C111.162 12.076 110.934 12.052 110.718 12.052C109.614 12.052 108.906 12.496 108.594 13.384C108.306 14.272 108.162 15.604 108.162 17.38C108.162 19.012 108.306 20.176 108.594 20.872C108.882 21.544 109.422 21.88 110.214 21.88ZM122.345 22.06H128.681V28H122.345V22.06ZM133.138 22.06H139.474V28H133.138V22.06ZM143.931 22.06H150.267V28H143.931V22.06Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
          {
            !loading && viewType === 'tech' && (
              <div className={`${styles.techMainBox} flex flex-wrap justify-center items-center`}>
                {
                  techData.map((box: any, index: number) => (
                    <TechsBox
                      key={index}
                      techBox={box}
                      currentLang={currentLang}
                      isSoftSkills={box.name.includes('Soft')}
                    />
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
      <section className={`${styles.techMobile} bg-polygon relative`}>
        <div className={`main-width relative z-10`}>
          <h2 className="text-white text-center">My Tech Journey</h2>
          <p>Just avaiable on desktop devices.</p>
        </div>
      </section>
    </>

  );
};

export default TechJourney;
