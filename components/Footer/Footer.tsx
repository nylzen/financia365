import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import FooterStyles from './FooterStyles.module.css';

const Footer = () => {
  return (
    <footer className={FooterStyles.Footer}>
      <div className={FooterStyles.FooterContainer}>
        <div className={FooterStyles.FooterInfo}>
          <h3>Financia365</h3>
          <p>
            Empresa conformada por Brokers y expertos financieros que han
            cambiado el concepto de Intermediación Financiera y lo han llevado a
            otro nivel.
          </p>
          <ul className={FooterStyles.FooterRedes}>
            <li>
              <Link href='https://www.linkedin.com' target='_blank'>
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link href='https://www.facebook.com' target='_blank'>
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com' target='_blank'>
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com' target='_blank'>
                <BsTwitter />
              </Link>
            </li>
          </ul>
        </div>

        <div className={FooterStyles.FooterGroups}>
          <h4>Grupo</h4>
          <ul className={FooterStyles.FooterLinks}>
            <li>365Group</li>
            <li>Vivienda365</li>
            <li>Obras y Proyectos 365</li>
          </ul>
        </div>

        <div className={FooterStyles.FooterLocation}>
          <h4>Ubicación</h4>
          <div>
            <p>El Carrascal:</p>
            <p>Av. Rey Juan Carlos I Nº 86 C.P: 28916. </p>
            <p>Leganés, Madrid.</p>
            <p>910 327 566</p>
          </div>
          <div>
            <p>El Carrascal II:</p>
            <p>Av. Rey Juan Carlos I Nº 90 1-D C.P: 28916</p>
            <p>Leganés, Madrid.</p>
            <p>910 722 294</p>
          </div>
        </div>

        <div className={FooterStyles.FooterApi}>
          <h4>API Financiero</h4>
          <ul>
            <li>Unicaja</li>
            <li>Sabadell</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
