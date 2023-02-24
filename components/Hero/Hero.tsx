import { Playfair_Display } from '@next/font/google';
import Image from 'next/image';
import HeroImg from '../../public/images/hero_img.png';
import HeroStyles from './HeroStyles.module.css';

const PlayfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const Hero = () => {
  return (
    <section className={HeroStyles.hero}>
      <div className={`${HeroStyles.hero__text} ${PlayfairDisplay.className}`}>
        <h1>La hipoteca que se ajusta a sus metas y presupuesto.</h1>
        <p>
          En Financia365, nos esforzamos por brindar una experiencia de hipoteca
          amigable y sin estrés.
        </p>
        <button className='btn__primary'>Agendar asesoría</button>
      </div>
      <div className='hero__img'>
        <Image src={HeroImg} placeholder='blur' alt='Hero Image' />
      </div>
    </section>
  );
};

export default Hero;
