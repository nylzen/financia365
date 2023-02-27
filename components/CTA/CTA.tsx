import CTAStyles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={CTAStyles.CTASection}>
      <h3 className={CTAStyles.CTAHeading}>
        ¡Toma acción ahora y consigue el dinero que necesitas para tus proyectos
        y metas!
      </h3>
      <p>
        Con nuestro proceso de solicitud rápido y sin complicaciones, podemos
        ayudarte a conseguir el préstamo personal que necesitas. ¡Haz clic aquí
        para solicitar tu préstamo y comenzar a hacer realidad tus sueños hoy
        mismo!"
      </p>
      <button className='btn btn__secondary'>Solicitar Préstamo</button>
    </section>
  );
};

export default CTA;
