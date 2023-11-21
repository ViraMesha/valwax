'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const page =
    typeof searchParams.get('page') === 'string'
      ? Number(searchParams.get('page'))
      : 1;

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
