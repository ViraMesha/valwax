'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import useModal from '@components/hooks/useModal';
import { useWindowSize } from 'usehooks-ts';

import { Locale } from '../../../i18n-config';
import Container from '../Container/Container';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import { tabsData, tabsI } from './data';

import styles from './Tabs.module.scss';

interface TabsI {
  dict: {
    tabs: {
      fullTitle: string[];
      abbreviatedTitle: string[];
    };
    filter: {
      title: string;
      subtitle: string;
      up: string;
      down: string;
      cleanUp: string;
      result: string;
      category: any;
    };
  };
  lang: Locale;
}

const Tabs: React.FC<TabsI> = ({ dict, lang }) => {
  const [isTabsMenuOpen, setIsTabsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { width } = useWindowSize();
  const isCurrent = (link: string) => link === `/${pathname.split('/')[2]}`;
  const isSmallScreen = width < 1230;
  const isMobScreen = width < 667;
  const { isModal, toggleModal, onBackdropClick } = useModal();

  const toggleTabsMenu = () => {
    setIsTabsMenuOpen(!isTabsMenuOpen);
  };

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {isMobScreen
            ? tabsData(dict.tabs).reduce((acc: any, item: tabsI) => {
                if (isCurrent(item.link)) {
                  acc.unshift(
                    <li
                      key={item.link}
                      className={`${styles.item} ${
                        isCurrent(item.link) ? styles.current : ''
                      }`}
                    >
                      <Link
                        href={`/${lang}${item.link}`}
                        className={styles.link}
                        onClick={toggleTabsMenu}
                      >
                        <Typography
                          variant="bodyRegular"
                          color={
                            isCurrent(item.link)
                              ? 'var(--cl-gray-900)'
                              : 'var(--cl-gray-400)'
                          }
                        >
                          {item.abbreviatedTitle}
                        </Typography>
                        {!isTabsMenuOpen && (
                          <MdKeyboardArrowDown
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                } else if (isTabsMenuOpen) {
                  acc.push(
                    <li
                      key={item.link}
                      className={`${styles.item} ${
                        isCurrent(item.link) ? styles.current : ''
                      }`}
                    >
                      <Link
                        href={`/${lang}${item.link}`}
                        className={styles.link}
                        onClick={toggleTabsMenu}
                      >
                        <Typography
                          variant="bodyRegular"
                          color={
                            isCurrent(item.link)
                              ? 'var(--cl-gray-900)'
                              : 'var(--cl-gray-400)'
                          }
                        >
                          {item.abbreviatedTitle}
                        </Typography>
                      </Link>
                    </li>
                  );
                }
                return acc;
              }, [])
            : tabsData(dict.tabs).map((item: tabsI, index: number) => (
                <li
                  key={index}
                  className={`${styles.item} ${
                    isCurrent(item.link) ? styles.current : ''
                  }`}
                >
                  <Link href={`/${lang}${item.link}`} className={styles.link}>
                    <Typography
                      variant="bodyRegular"
                      className={styles.title}
                      color={
                        isCurrent(item.link)
                          ? 'var(--cl-gray-900)'
                          : 'var(--cl-gray-400)'
                      }
                    >
                      {isSmallScreen ? item.abbreviatedTitle : item.fullTitle}
                    </Typography>
                  </Link>
                </li>
              ))}
        </ul>
        {isSmallScreen && (
          <button className={styles.btn} onClick={toggleModal}>
            <Typography variant="bodyRegular" color={'var(--cl-primary-200)'}>
              +3
            </Typography>
            <IoOptionsOutline />
            <Typography variant="bodyRegular" color={'var(--cl-gray-500)'}>
              {dict.filter.title}
            </Typography>
          </button>
        )}
        {isModal && (
          <Modal onBackdropClick={onBackdropClick} className={styles.backdrop}>
            <Filter dict={dict.filter} />
          </Modal>
        )}
      </Container>
    </Section>
  );
};

export default Tabs;
