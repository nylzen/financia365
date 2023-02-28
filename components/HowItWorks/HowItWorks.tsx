import Image from 'next/image';
import HowItWorksImage from '../../public/images/howitworks.png';
import HowItWorksStyles from './HowItWorksStyles.module.css';

const HowItWorks = () => {
  return (
    <section className={HowItWorksStyles.HowItWorks}>
      <h3 className={HowItWorksStyles.HowItWorksHeading}>¿Cómo funciona?</h3>
      <div className={HowItWorksStyles.HowInfoContainer}>
        <Image
          src={HowItWorksImage}
          width={550}
          height={550}
          alt='Como funciona'
        />
        <div className={HowItWorksStyles.HowInfoStepsContainer}>
          <div className={HowItWorksStyles.HowStep}>
            <h4>Selecciona el servicio</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Non praesent sed placerat
              amet aliquam elementum.
            </p>
          </div>
          <div className={HowItWorksStyles.HowStep}>
            <h4>Reserva una cita</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Non praesent sed placerat
              amet aliquam elementum.
            </p>
          </div>
          <div className={HowItWorksStyles.HowStep}>
            <h4>¡Disfruta!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Non praesent sed placerat
              amet aliquam elementum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
