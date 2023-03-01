import Input from '../UI/Input/Input';
import ContactStyles from './Contactstyles.module.css';

const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.3009988755953!2d-3.7447058842955347!3d40.335668368488776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227560c33914d%3A0xe39d90d7449cca23!2sAv.%20Rey%20Juan%20Carlos%20I%2C%2086%2C%2028916%20Legan%C3%A9s%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1677645095107!5m2!1ses!2sar';

const Contact = () => {
  return (
    <section className={ContactStyles.Contact}>
      <div>
        <h3 className='heading'>Contáctanos</h3>
        <form className={ContactStyles.Form}>
          <Input label='Nombre' type='text' />
          <Input label='Email' type='email' />
          <Input label='Teléfono' type='text' />
          <button className='btn btn__primary'>Enviar</button>
        </form>
      </div>
      <iframe
        src={mapUrl}
        width='400'
        height='400'
        loading='lazy'
        className={ContactStyles.Map}
      ></iframe>
    </section>
  );
};

export default Contact;
