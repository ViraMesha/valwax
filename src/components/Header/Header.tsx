import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TbCurrencyHryvnia } from 'react-icons/tb';

import flagUA from '../../../public/images/icons/flag-ukraine.svg';
import logo from '../../../public/images/icons/header-logo.svg';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

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
          <ul>
            <li className={styles.language_menu}>
              <Image src={flagUA} alt="Ukrainian flag" />
              <TbCurrencyHryvnia style={{ width: '24px', height: '24px' }} />
              <MdKeyboardArrowDown
                className={styles.arrowDown}
                style={{ width: '24px', height: '24px' }}
              />
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
