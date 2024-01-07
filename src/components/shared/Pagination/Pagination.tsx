'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import { useFilterSearchParams } from '@components/hooks';

import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { queryParams } = useFilterSearchParams();

  const page =
    typeof searchParams.get('page') === 'string'
      ? Number(searchParams.get('page'))
      : 1;

  const pageRange = Array.from(
    { length: totalPages ?? 1 },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber: number) => {
    router.push(`?page=${pageNumber}&perPage=9&${queryParams}#candles-section`);
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
                onClick={() => handlePageClick(pageNumber)}
              ></button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Pagination;
