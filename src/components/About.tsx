'use client';

import { ReactTyped } from 'react-typed';
import { Motion, FloatingDiv } from '@/components/ui/motion';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const roles = t('about.roles', { returnObjects: true }) as string[];

  return (
    <>
      <Motion direction="right" duration={1} delay={0.2}>
        <FloatingDiv delay={1}>
          <Image
            width={500}
            height={500}
            src="/profile_pic.jpg"
            className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full object-cover shadow-xl"
            alt={t('about.alt')}
          />
        </FloatingDiv>
      </Motion>

      <Motion direction="left" duration={1} delay={0.4}>
        <div className="flex flex-col items-center md:items-start gap-5 text-viridian">
          <h1 className="text-6xl md:text-8xl font-bold">{t('about.title')}</h1>
          <h2 className="text-xl md:text-2xl">{t('about.subtitle')}</h2>
          <p className="text-2xl md:text-4xl">
            <span className="bg-viridian text-azure p-1 rounded relative md:absolute">
              <ReactTyped strings={roles} typeSpeed={150} loop />
            </span>
          </p>
        </div>
      </Motion>
    </>
  );
}
