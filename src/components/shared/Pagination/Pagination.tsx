'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import useTotalPages from '@components/hooks/useTotalPages';
import type { CandleApiResponse } from '@components/types';

import styles from './Pagination.module.scss';

interface PaginationProps {
  promise: Promise<CandleApiResponse>;
}

const Pagination = ({ promise }: PaginationProps) => {
  const totalPages = useTotalPages(promise);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const page =
    typeof searchParams.get('page') === 'string'
      ? Number(searchParams.get('page'))
      : 1;

  const pageRange = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      {totalPages > 1 ? (
        <Section>
          <Container>
            <ul className={styles.dots}>
              {pageRange.map(pageNumber => (
                <li
                  key={pageNumber}
                  className={`${page === pageNumber && styles.active}`}
                >
                  <Link
                    href={`${pathName}?page=${pageNumber}`}
                    aria-label={`Go to page ${pageNumber}`}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
};

export default Pagination;
