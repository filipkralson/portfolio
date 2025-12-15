import Header from '@/components/Header';
import About from '@/components/About';
import Stats from '@/components/Stats';
import ContentWrapper from '@/components/ui/contentWrapper';
import SimpleParallax from '@/components/SimpleParallax';
import InfoCards from '@/components/InfoCards';
import LogoCarousel from '@/components/LogoCarousel';
import ContactForm from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonails';

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
