import styles from './styles.module.scss';
import { useState } from 'react';
import { useTranslations } from '@i18n/utils';

interface Props {
  currentLang: string;
}

const Projects = ({ currentLang }: Props) => {
  const t = useTranslations(currentLang as 'en' | 'es');

  return (
    <>
      <section className={`${styles.projects}`}>
        <div className={`main-width z-10`}>
          <h2 className="text-white text-center">Projects</h2>
          <br />
        </div>
      </section>
    </>
  );
}

export default Projects;
