'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { candlesMenuItems, navItems, navLinks } from './navData';

import styles from './Navigation.module.scss';

interface NavigationPropsI {
  className?: string;
  onClick?: () => void;
  variant?: string;
}

const Navigation: React.FC<NavigationPropsI> = ({
  className,
  onClick,
  variant,
}) => {
  const pathname = usePathname();
  const [isCandlesMenuOpen, setIsCandlesMenuOpen] = useState(false);
  const isActive = (link: string) => pathname === link;

  const toggleDropdown = () => {
    setIsCandlesMenuOpen(!isCandlesMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsCandlesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCandlesMenuOpen(false);
  };
  const centerContentClass =
    variant === 'footer' ? styles.centerContentFooter : styles.centerContent;

  const candlesListClass =
    variant === 'footer'
      ? `${styles.candlesList} ${styles.footerCandlesList}`
      : styles.candlesList;

  return (
    <nav>
      <ul className={`${styles.navigationList} ${className || ''}`}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navigationItem}>
            {item === 'Свічки' ? (
              <div
                className={styles.dropdown}
                onClick={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={centerContentClass}>
                  <span className={styles.linkText}>Свічки</span>
                  {isCandlesMenuOpen ? (
                    <MdKeyboardArrowUp
                      className={styles.arrowIcon}
                      style={{ width: 24, height: 24 }}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className={styles.arrowIcon}
                      style={{ width: 24, height: 24 }}
                    />
                  )}
                </div>
                {isCandlesMenuOpen && (
                  <ul className={candlesListClass}>
                    {candlesMenuItems.map((candlesItem, index) => (
                      <li key={index} className={styles.candlesItem}>
                        <Link
                          href={navLinks[candlesItem] ?? ''}
                          className={`candlesLink${
                            isActive(navLinks[candlesItem] ?? '')
                              ? ` ${styles.activeLink}`
                              : ''
                          }`}
                        >
                          {candlesItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={navLinks[item] ?? ''}
                className={
                  isActive(navLinks[item] ?? '') ? styles.activeLink : ''
                }
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
