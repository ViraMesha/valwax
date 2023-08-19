'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useWindowSize } from 'usehooks-ts';

import logo from '../../../public/images/icons/header-logo.svg';
import sm_logo from '../../../public/images/icons/sm-logo.svg';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

import LanguageMenu from './LanguageMenu/LanguageMenu';

import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isSmallScreen = width < 1230;

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const html = document.querySelector('html');

    isMobileMenuOpen
      ? html?.classList.add(styles.overflowHidden)
      : html?.classList.remove(styles.overflowHidden);
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          {isSmallScreen ? (
            <Image src={sm_logo} alt="Logo" priority />
          ) : (
            <Image src={logo} alt="Logo" priority />
          )}
        </Link>
        <Navigation className={styles.navbar} />

        <div className={styles.icons}>
          <ul className={styles.iconsList}>
            <li className={styles.iconsItem}>
              <BiShoppingBag />
            </li>
            <li className={styles.iconsItem}>
              <AiOutlineSearch style={{ strokeWidth: '2px' }} />
            </li>
            <li
              className={`${styles.iconsItem} ${styles.menuIcon}`}
              onClick={toggleMenuOpen}
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt1 />}
            </li>
          </ul>

          <LanguageMenu className={styles.langMenu} />
        </div>

        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <Navigation className={styles.mobileMenu} onClick={toggleMenuOpen} />
          <LanguageMenu className={styles.mobileLangMenu} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
