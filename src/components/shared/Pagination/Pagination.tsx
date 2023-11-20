'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import styles from './Pagination.module.scss';

interface PaginationProps {
  page?: number;
}

const Pagination = ({ page }: PaginationProps) => {
  const pathName = usePathname();

  // TODO: Change length
  const pageRange = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <Section>
      <Container>
        <ul className={styles.dots}>
          {pageRange.map(pageNumber => (
            <li
              key={pageNumber}
              className={`${page === pageNumber && styles.active}`}
            >
              <Link href={`${pathName}?page=${pageNumber}`} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Pagination;
