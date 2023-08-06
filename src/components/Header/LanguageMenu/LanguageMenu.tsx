'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import languageData, { ILanguage } from './languageData';

import styles from './LanguageMenu.module.css';

const LanguageMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    languageData[0]
  );

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleLanguageSelect = (language: ILanguage) => {
    setSelectedLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={styles.languageMenu}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className={styles.languageContainer} onClick={toggleMenu}>
        <Image
          src={selectedLanguage.icon}
          alt={selectedLanguage.lang}
          width={24}
          height={24}
          className={styles.languageIcon}
        />
        <span className={styles.languageTitle}>{selectedLanguage.lang}</span>
        {isMenuOpen ? (
          <MdKeyboardArrowUp className={styles.arrowIcon} />
        ) : (
          <MdKeyboardArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {isMenuOpen && (
        <ul className={styles.languageList}>
          {languageData.map((language) => (
            <li
              key={language.id}
              className={`${styles.languageItem} ${
                language.id === selectedLanguage.id ? styles.selectedLanguage : ''
              }`}
              onClick={() => handleLanguageSelect(language)}
            >
              <Image src={language.icon} alt={language.lang} width={24} height={24} />
              <span>{language.lang}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageMenu;
