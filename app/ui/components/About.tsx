'use client';

import { ReactTyped } from 'react-typed';
import { Motion, FloatingDiv } from '@/app/ui/motion';
import Image from 'next/image';

const strings = [
  'Frontendový nadšenec.',
  'Backendový Král ;).',
  'Designový zedník.',
  'Databázový hospodář.',
  'Návrhový vizionář.',
  'Učenlivý člověk.',
];

export default function About() {
  return (
    <>
      <Motion direction="right" duration={1} delay={0.2}>
        <FloatingDiv delay={1}>
          <Image
            width={500}
            height={500}
            src="/profile_pic.jpg"
            className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full object-cover shadow-xl"
            alt="Moje krásná fotka"
          />
        </FloatingDiv>
      </Motion>

      <Motion direction="left" duration={1} delay={0.4}>
        <div className="flex flex-col items-center md:items-start gap-5 text-viridian">
          <h1 className="text-6xl md:text-8xl font-bold">O mně</h1>
          <h2 className="text-xl md:text-2xl">Mohl bych být něco jako...</h2>
          <p className="text-2xl md:text-4xl">
            <span className="bg-viridian text-azure p-1 rounded relative md:absolute">
              <ReactTyped strings={strings} typeSpeed={150} loop />
            </span>
          </p>
        </div>
      </Motion>
    </>
  );
}
