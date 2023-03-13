import CTAStyles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={CTAStyles.CTASection}>
      <div className={CTAStyles.CTA__text}>
        <h3 className={CTAStyles.CTAHeading}>
          ¡Toma acción ahora y consigue el dinero que necesitas para tus
          proyectos y metas!
        </h3>

        <button className='btn btn__primary'>Solicitar Préstamo</button>
      </div>
    </section>
  );
};

export default CTA;
