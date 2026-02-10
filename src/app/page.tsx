"use client";

import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <MainLayout>
      {/* Grid Layout Definition 
          PC: 12 cols, 12 rows. 
          Mobile: Flex col.
      */}

      {/* Row 1: Hero (Left) & Contact (Right) */}
      <div className="md:col-span-6 md:row-span-5 w-full h-auto md:h-full">
        <Hero />
      </div>

      <div className="md:col-span-6 md:row-span-5 w-full h-auto md:h-full">
        <ContactForm />
      </div>

      {/* Row 2: Info Cards */}
      <div className="md:col-span-4 md:row-span-5 w-full h-auto md:h-full">
        <AboutMe />
      </div>

      <div className="md:col-span-4 md:row-span-5 w-full h-auto md:h-full">
        <Services />
      </div>

      <div className="md:col-span-4 md:row-span-5 w-full h-auto md:h-full">
        <Stats />
      </div>

      {/* Row 3: Skills / Footer */}
      <div className="md:col-span-12 md:row-span-2 w-full h-auto md:h-full">
        <Skills />
      </div>

      {/* Footer Text */}
      <div className="md:hidden text-center text-xs opacity-50 pb-8">
        {t("footer.rights")}
      </div>
    </MainLayout>
  );
}
