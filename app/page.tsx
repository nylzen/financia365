import {
  Contact,
  CTA,
  Footer,
  Hero,
  HowItWorks,
  Servicios,
} from '@/components';

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <Servicios />
        <CTA />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default page;
