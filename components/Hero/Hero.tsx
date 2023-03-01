import { playfairDisplay } from '@/fonts/fonts';
import Image from 'next/image';
import HeroImg from '../../public/images/hero_img.png';
import HeroStyles from './HeroStyles.module.css';

const Hero = () => {
  return (
    <section className={HeroStyles.heroSection}>
      <div className={HeroStyles.hero}>
        <div className={HeroStyles.hero__text}>
          <h1 className={playfairDisplay.className}>
            La hipoteca que se ajusta a sus metas y presupuesto.
          </h1>
          <p>
            En Financia365, nos esforzamos por brindar una experiencia de
            hipoteca amigable y sin estrés.
          </p>
          <button className='btn btn__primary'>Agendar asesoría</button>
        </div>
        <div className='hero__img'>
          <Image
            src={HeroImg}
            placeholder='blur'
            alt='Hero Image'
            width={485}
            height={485}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
