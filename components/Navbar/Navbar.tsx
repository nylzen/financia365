import { Route } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../public/images/logo.png';
import navbarStyles from './NavbarStyles.module.css';

interface Props {
  pathNames: Route[];
}

const Navbar = ({ pathNames }: Props) => {
  return (
    <header className={navbarStyles.Header}>
      <nav className={navbarStyles.Navbar}>
        <Link href='/'>
          <Image src={Logo} alt='logo' />
        </Link>
        <ul className={navbarStyles.NavbarMenu}>
          {pathNames.map(pathName => (
            <li key={pathName.path}>
              <Link href={pathName.path}>{pathName.name}</Link>
            </li>
          ))}
        </ul>
        <button className={navbarStyles.BurgerMenu}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
