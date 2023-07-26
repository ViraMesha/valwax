'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typography from '@components/components/Typography/Typography';
import styles from './navigation.module.css';
import { navItems, navLinks } from './navData';


const Navigation = () => {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  return (
    <nav>
      <ul className={styles.navigationList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={isActive(navLinks[item] ?? '') ? styles.activeLink : ''}
          >
            <Link href={navLinks[item] ?? ''}>
              <Typography variant="bodyL" color="var(--cl---gray-700)">
                {item}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;


 