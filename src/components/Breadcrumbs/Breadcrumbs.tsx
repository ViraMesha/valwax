import Link from 'next/link';
import { BiSolidChevronRight } from 'react-icons/bi';

import { BreadcrumbsProps } from './data';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className={styles.container}>
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <>
              <Link href={crumb.path} key={i} className={styles.link}>
                {crumb.label}
              </Link>
              {/* separator */}
              <BiSolidChevronRight className={styles.separator} />
            </>
          );
        } else {
          return (
            <span key={i} className={styles.link}>
              {crumb.label}
            </span>
          );
        }
      })}
    </div>
  );
};
export default Breadcrumbs;
