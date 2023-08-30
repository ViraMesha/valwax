'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems, navLinks } from './navData';

import styles from './Navigation.module.css';

interface NavigationPropsI {
  className?: string;
  onClick?: () => void;
}

const Navigation: React.FC<NavigationPropsI> = ({ className, onClick }) => {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  return (
    <nav>
      <ul className={`${styles.navigationList}  ${className || ''}`}>
        {navItems.map((item, index) => (
          <li key={index} onClick={onClick}>
            <Link
              href={navLinks[item] ?? ''}
              className={
                isActive(navLinks[item] ?? '') ? styles.activeLink : ''
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
