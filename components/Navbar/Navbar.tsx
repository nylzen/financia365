import { Route } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/logo.png';
import navbarStyles from './NavbarStyles.module.css';

interface Props {
  pathNames: Route[];
}

const Navbar = ({ pathNames }: Props) => {
  return (
    <header>
      <nav className={navbarStyles.Navbar}>
        <Link href='/'>
          <Image src={Logo} alt='logo' />
        </Link>

        {pathNames.map(pathName => (
          <Link key={pathName.path} href={pathName.path}>
            {pathName.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
