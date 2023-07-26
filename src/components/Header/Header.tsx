import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/icons/header-logo.svg';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" priority />
        </Link>
        <Navigation />
        <ul>
          <li></li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
