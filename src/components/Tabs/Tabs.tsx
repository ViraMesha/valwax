'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWindowSize } from 'usehooks-ts';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import { tabsData } from './data';

import styles from './Tabs.module.scss';

const Tabs = () => {

  const pathname = usePathname();
  const { width } = useWindowSize();
  const isCurrent = (link: string) => link === pathname;
  const isSmallScreen = width < 1230;
  
  return (
    <Section className={styles.section}>
      <Container>
        <ul className={styles.list}>
          {tabsData.map((item: object, index: number) => (
            <li
              key={index}
              className={`${styles.item} ${
                isCurrent(item.link) ? styles.current : ''
              }`}
            >
              <Link href={item.link} className={styles.link}>
                <Typography variant="bodyMedium" color="var(--cl-gray-400)">
                  {isSmallScreen ? item.fullTitle : item.abbreviatedTitle}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Tabs;
