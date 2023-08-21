import Image from 'next/image';
import Link from 'next/link';
import { BiSolidChevronRight } from 'react-icons/bi';

import home from '../../../public/images/icons/home-breadcrumbs-heart.svg';

import { BreadcrumbsProps } from './data';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumbs">
      <ol className={styles.container}>
        <li className={styles.crumb}>
          <Link href="/" className={`${styles.link} ${styles.noHover}`}>
            <Image src={home} alt="Home" width={24} height={24} />
          </Link>
          <BiSolidChevronRight className={styles.separator} />
        </li>
        {items.map((crumb, i) => (
          <li key={i} className={styles.crumb}>
            <Link href={crumb.path} className={`${styles.link}`}>
              {crumb.label}
            </Link>
            {items?.length - 1 !== i && (
              <BiSolidChevronRight className={styles.separator} />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
