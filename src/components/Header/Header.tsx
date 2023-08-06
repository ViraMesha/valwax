import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';

import logo from '../../../public/images/icons/header-logo.svg';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

import LanguageMenu from './LanguageMenu/LanguageMenu';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo" priority />
        </Link>
        <Navigation />
        <div className={styles.icons}>
          <ul className={styles.shoppingIcons}>
            <li className={styles.shoppingIcons__item}>
              <BiShoppingBag style={{ width: '24px', height: '24px' }} />
            </li>
            <li className={styles.shoppingIcons__item}>
              <AiOutlineSearch style={{ width: '24px', height: '24px' }} />
            </li>
          </ul>
          <LanguageMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
