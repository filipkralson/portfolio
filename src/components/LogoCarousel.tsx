'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import {
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiLinux,
  SiReact,
  SiFigma,
  SiPython,
  SiFlask,
  SiGit,
  SiPostman,
  SiSwagger,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { Motion } from '@/components/ui/motion';
import { useTranslation } from 'react-i18next';

type CardType = {
  icon: React.ElementType;
  title: string;
};

const cards: CardType[] = [
  {
    icon: FaJava,
    title: 'Java',
  },
  {
    icon: SiSpring,
    title: 'Spring',
  },
  {
    icon: SiPython,
    title: 'Python',
  },
  {
    icon: SiFlask,
    title: 'Flask',
  },
  {
    icon: SiHtml5,
    title: 'HTML',
  },
  {
    icon: SiCss3,
    title: 'CSS',
  },
  {
    icon: SiJavascript,
    title: 'JavaScript',
  },
  {
    icon: SiTypescript,
    title: 'TypeScript',
  },
  {
    icon: SiReact,
    title: 'React',
  },
  {
    icon: RiNextjsFill,
    title: 'Next.js',
  },
  {
    icon: SiTailwindcss,
    title: 'Tailwind CSS',
  },
  {
    icon: SiFigma,
    title: 'Figma',
  },
  {
    icon: SiDocker,
    title: 'Docker',
  },
  {
    icon: SiMongodb,
    title: 'MongoDB',
  },
  {
    icon: SiMysql,
    title: 'MySQL',
  },
  {
    icon: SiPostgresql,
    title: 'PostgreSQL',
  },
  {
    icon: SiLinux,
    title: 'Linux',
  },
  {
    icon: SiGit,
    title: 'Git',
  },
  {
    icon: SiPostman,
    title: 'Postman',
  },
  {
    icon: SiSwagger,
    title: 'Swagger',
  },
];

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="group relative md:h-[350px] md:w-[350px] h-[300px] w-[300px] overflow-hidden bg-mintGreen rounded-3xl">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <card.icon className="h-full w-full text-cambridgeBlue p-10" />
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-azure backdrop-blur-lg rounded-3xl">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default function LogoCarousel() {
  const { t } = useTranslation();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <section className="relative">
      <div className="flex justify-center items-center bg-viridian">
        <Motion direction="down" delay={0.1} duration={0.3}>
          <h1 className="text-7xl font-bold p-10 text-mintCream">{t('logoCarousel.title')}</h1>
        </Motion>
      </div>
      <div ref={targetRef} className="relative h-[300vh] bg-viridian">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card, index) => {
              return (
                <Motion key={index} direction="down" delay={0.2} duration={0.5}>
                  <Card card={card} key={index} />
                </Motion>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
