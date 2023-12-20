'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page =
    typeof searchParams.get('page') === 'string'
      ? Number(searchParams.get('page'))
      : 1;

  const pageRange = Array.from(
    { length: totalPages ?? 1 },
    (_, index) => index + 1
  );

  const handleClick = (pageNumber: number) => {
    router.push(`?page=${pageNumber}#candles-section`);
  };

  return (
    <Section>
      <Container>
        <ul className={styles.dots}>
          {pageRange.map(pageNumber => (
            <li key={pageNumber}>
              <button
                className={`${styles.button} ${
                  page === pageNumber && styles.active
                }`}
                onClick={() => handleClick(pageNumber)}
              ></button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Pagination;
