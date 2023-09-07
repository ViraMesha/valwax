'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import useModal from '@components/hooks/useModal';
import { useWindowSize } from 'usehooks-ts';

import logo from '../../../public/images/icons/header-logo.svg';
import sm_logo from '../../../public/images/icons/sm-logo.svg';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';

import LanguageMenu from './LanguageMenu/LanguageMenu';

import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isModal, handleOpenModal } = useModal();
  console.log('Header _isModal', isModal);

  const { width } = useWindowSize();
  const isSmallScreen = width < 1230;

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <li className={styles.iconsItem} onClick={handleOpenModal}>
              <AiOutlineSearch style={{ strokeWidth: '2px' }} />
            </li>
           { isModal && <Search /> }

            <li className={styles.iconsItem}>
              <button className={styles.menuIcon} onClick={toggleMenuOpen}>
                {isMobileMenuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt1 />}
              </button>
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
