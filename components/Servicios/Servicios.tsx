import Image from 'next/image';
import { servicesData } from './data';

const Servicios = () => {
  return (
    <section id='about'>
      <h3>Un futuro financiero sólido, comenzando hoy</h3>
      <div className='servicios__cards'>
        {servicesData.map(service => (
          <div className='servicios__card' key={service.id}>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={230}
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
