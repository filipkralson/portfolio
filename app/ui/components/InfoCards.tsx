'use client';

import { MdWeb, MdDraw, MdPhone } from 'react-icons/md';
import { Motion } from '@/app/ui/motion';
import React, { ReactNode, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

type InfoCardWrapperType = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const InfoCardsProps = [
  {
    icon: MdWeb,
    title: 'Webová řešení',
    description:
      'Pomůžu Vám při vytváření a udržování webových stránek a aplikací. Mám zkušenosti s návrhem, implementací a nasazením webových řešení na míru. Vzdělávání a profesní seberozvoj je dá se říct mým každodenním chlebem.',
  },
  {
    icon: MdDraw,
    title: 'Design',
    description:
      'Návrhy UI/UX, design log a brandingu mi nikdy nebyly cizí. Cit pro detail se u mě začal projevovat už při prvních projektech na střední škole a dále se prohlubuje. Snažím se vcítit do obyčeného uživatele a předpokládám, co by se mu líbilo nejvíce.',
  },
  {
    icon: MdPhone,
    title: 'Brainstorming',
    description:
      'Při naší spolupráci budu rád za Váš feedback, nebráním se online, telefonním, tak i osobním schůzkám. Naoplátku Vám pomohu nasměrovat řešení správným směrem a předejít tak chybám.',
  },
];

const ROTATION_RANGE: number = 10;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative rounded-2xl bg-viridian shadow-lg p-6">
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: `translateZ(100px)`,
        }}
        className="relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-mintCream to-azure p-6 md:p-10 shadow-inner">
        {children}
      </div>
    </motion.div>
  );
};

const InfoCardWrapper = ({ icon: Icon, title, description }: InfoCardWrapperType) => {
  return (
    <TiltCard>
      <Icon className="md:text-[8rem] text-6xl text-cambridgeBlue" />
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-viridian md:text-3xl text-xl font-bold text-center">{title}</h1>
        <p className="text-viridian md:text-md text-base text-center">{description}</p>
      </div>
    </TiltCard>
  );
};

export default function InfoCards() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Motion direction="down" duration={0.3}>
        <h1 className="text-5xl md:text-7xl font-bold mb-20 text-mintCream">
          S čím mohu pomoci...
        </h1>
      </Motion>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {InfoCardsProps.map((card, index) => (
          <Motion key={index} direction="up" duration={0.3} delay={0.1 + index * 0.1}>
            <InfoCardWrapper icon={card.icon} title={card.title} description={card.description} />
          </Motion>
        ))}
      </div>
    </section>
  );
}
