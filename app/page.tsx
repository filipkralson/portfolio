import Header from '@/app/ui/components/Header';
import About from '@/app/ui/components/About';
import Stats from '@/app/ui/components/Stats';
import ContentWrapper from './ui/contentWrapper';
import SimpleParallax from '@/app/ui/components/SimpleParallax';
import InfoCards from '@/app/ui/components/InfoCards';
import LogoCarousel from '@/app/ui/components/LogoCarousel';
import ContactForm from '@/app/ui/components/Contact';
import Footer from '@/app/ui/components/Footer';
import Testimonials from '@/app/ui/components/Testimonails';

export default function Page() {
  return (
    <div className="bg-mintCream">
      <SimpleParallax color="bg-mintGreen">
        <Header />
      </SimpleParallax>
      <ContentWrapper>
        <About />
      </ContentWrapper>
      <SimpleParallax color="bg-cambridgeBlue">
        <InfoCards />
      </SimpleParallax>
      <ContentWrapper>
        <Stats />
      </ContentWrapper>
      <LogoCarousel />
      <ContentWrapper>
        <Testimonials />
      </ContentWrapper>
      <ContentWrapper>
        <ContactForm />
      </ContentWrapper>
      <Footer />
    </div>
  );
}
