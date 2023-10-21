'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useWindowSize } from 'usehooks-ts';

import languageData, { ILanguage } from './languageData';

import styles from './LanguageMenu.module.scss';

interface LanguageMenuPropsI {
  className?: string;
}

const LanguageMenu: React.FC<LanguageMenuPropsI> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    languageData[0]
  );
  const { width } = useWindowSize();
  const isDesktop = width >= 1230;
  const pathName = usePathname();
  const lang = pathName.split('/')[1];

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleLanguageSelect = (language: ILanguage) => {
    setSelectedLanguage(language);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = () => {
    isDesktop && setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    isDesktop && setIsMenuOpen(false);
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div
      className={`${styles.languageMenu} ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.languageContainer} onClick={toggleMenu}>
        <Image
          src={
            selectedLanguage.value === lang
              ? selectedLanguage.icon
              : languageData[1].icon
          }
          alt={
            selectedLanguage.value === lang
              ? selectedLanguage.lang
              : languageData[1].lang
          }
          width={24}
          height={24}
          className={styles.languageIcon}
        />
        <span className={styles.languageTitle}>
          {selectedLanguage.value === lang
            ? selectedLanguage.lang
            : languageData[1].lang}
        </span>
        {isMenuOpen ? (
          <MdKeyboardArrowUp className={styles.arrowIcon} />
        ) : (
          <MdKeyboardArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {isMenuOpen && (
        <ul className={styles.languageList}>
          {languageData.map(language => (
            <li
              key={language.id}
              className={`${styles.languageItem} ${
                language.id === selectedLanguage.id
                  ? styles.selectedLanguage
                  : ''
              }`}
            >
              <Link
                href={redirectedPathName(language.value)}
                onClick={() => handleLanguageSelect(language)}
                className={styles.languageLink}
              >
                <Image
                  src={language.icon}
                  alt={language.lang}
                  width={24}
                  height={24}
                />
                <span>{language.lang}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageMenu;
