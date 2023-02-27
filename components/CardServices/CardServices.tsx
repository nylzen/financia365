import Image from 'next/image';
import CardServiceStyle from './CardServices.module.css';

interface Props {
  title: string;
  description: string;
  image: string;
  id: number;
}

const CardServices = (props: Props) => {
  const { title, description, image, id } = props;
  return (
    <div className={CardServiceStyle.CardService}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={230}
        className={CardServiceStyle.CardImg}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className='btn__primary'>Agendar asesoría</button>
    </div>
  );
};

export default CardServices;
