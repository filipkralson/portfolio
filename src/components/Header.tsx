'use client';

import { Motion } from '@/components/ui/motion';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { dictionaryData } from '@/data/dictionary';

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-center">
      <Motion direction="down" delay={0.2} duration={0.6}>
        <section className="relative flex text-viridian">
          <div className="flex flex-col gap-10 text-left">
            <Motion direction="right" delay={0.3} duration={0.5}>
              <div className="flex md:flex-row flex-col justify-start gap-5">
                <h1 className="text-6xl font-bold">{t('header.my')}</h1>
                <h1 className="text-6xl font-bold bg-viridian text-azure line md:px-4">
                  {t('header.portfolio')}
                </h1>
              </div>
            </Motion>
            <blockquote className="border-l-4 border-viridian pl-4">
              <div className="mb-2 text-sm text-cambridgeBlue italic">
                {dictionaryData.source.text}
                <a
                  href={dictionaryData.source.linkUrl}
                  className="ml-2 text-mintCream-500 underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  {dictionaryData.source.linkText}
                </a>
              </div>
              {dictionaryData.definitions.map((def, index) => (
                <p key={index} className={def.type === 'noun' ? 'font-bold' : ''}>
                  {def.type === 'noun' && 'noun'}
                  {def.highlight && (
                    <>
                      plural <span className="underline">{def.highlight}</span>
                    </>
                  )}
                  {def.text}
                </p>
              ))}
            </blockquote>
          </div>
        </section>
      </Motion>
      <Motion direction="left" delay={0.2} duration={0.6}>
        <Link href="#contact-form" className="relative">
          <MdOutlineEmail className="w-[75px] h-[75px] bg-viridian rounded-full p-2 text-azure shadow-lg transition-transform transform ease-in-out duration-300 hover:scale-110 hover:bg-cambridgeBlue" />
        </Link>
      </Motion>
    </div>
  );
}
