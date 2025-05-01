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
          <h2 className="text-white">Projects</h2>
          <hr className="hr mt-2 mb-0" />
          <br />
        </div>
      </section>
    </>
  );
}

export default Projects;
