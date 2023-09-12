'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import useModal from '@components/hooks/useModal';
import { useWindowSize } from 'usehooks-ts';

import { Locale } from '../../../i18n-config';
import logo from '../../../public/images/icons/header-logo.svg';
import sm_logo from '../../../public/images/icons/sm-logo.svg';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';

import LanguageMenu from './LanguageMenu/LanguageMenu';

import styles from './Header.module.css';

const Header = ({ lang }: { lang: Locale }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isModal, toggleModal, onBackdropClick } = useModal();

  const { width } = useWindowSize();
  const isSmallScreen = width < 1230;

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href={`/${lang}`} className={styles.logo}>
          {isSmallScreen ? (
            <Image src={sm_logo} alt="Logo" priority />
          ) : (
            <Image src={logo} alt="Logo" priority />
          )}
        </Link>
        <Navigation className={styles.navbar} lang={lang} />

        <div className={styles.icons}>
          <LanguageMenu className={styles.langMenu} />
          <ul className={styles.iconsList}>
            <li className={styles.iconsItem}>
              <BiShoppingBag />
            </li>
            <li className={styles.iconsItem} onClick={toggleModal}>
              <AiOutlineSearch style={{ strokeWidth: '2px' }} />
            </li>
            {isSmallScreen && (
              <li className={styles.iconsItem}>
                <button
                  className={styles.menuIcon}
                  onClick={toggleMenuOpen}
                  aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                  {isMobileMenuOpen ? (
                    <AiOutlineClose />
                  ) : (
                    <HiOutlineMenuAlt1 />
                  )}
                </button>
              </li>
            )}
          </ul>
        </div>
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <Container>
            <Navigation
              className={styles.mobileMenu}
              onClick={toggleMenuOpen}
              lang={lang}
            />
            <LanguageMenu className={styles.mobileLangMenu} />
          </Container>
        </div>
        {isModal && (
          <Modal onBackdropClick={onBackdropClick}>
            <Search onClose={toggleModal} />
          </Modal>
        )}
      </Container>
    </header>
  );
};

export default Header;
