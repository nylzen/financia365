import CardServices from '../CardServices/CardServices';
import { servicesData } from './data';
import ServicesStyles from './ServicesStyles.module.css';

const Servicios = () => {
  return (
    <section id='about' className={ServicesStyles.Services}>
      <div className={ServicesStyles.ServicesText}>
        <h3 className={ServicesStyles.ServicesHeading}>
          Un futuro financiero sólido, comenzando hoy
        </h3>
        <p className={ServicesStyles.ServicesP}>
          Somos asesores expertos en el sector inmobiliario y financiero, eso
          nos permite acompañarte en todo el trayecto hasta la obtención de tu
          vivienda.
        </p>
      </div>
      <div className={ServicesStyles.ServiciosCards}>
        {servicesData.map(service => (
          <CardServices {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
