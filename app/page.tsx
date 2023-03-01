import { Contact, CTA, Hero, HowItWorks, Servicios } from '@/components';

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
    </>
  );
};

export default page;
