import CardServices from '../CardServices/CardServices';
import { servicesData } from './data';
import ServicesStyles from './ServicesStyles.module.css';

const Servicios = () => {
  return (
    <section id='about' className={ServicesStyles.Services}>
      <h3 className={ServicesStyles.ServicesHeading}>
        Un futuro financiero sólido, comenzando hoy
      </h3>
      <div className={ServicesStyles.ServiciosCards}>
        {servicesData.map(service => (
          <CardServices {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
