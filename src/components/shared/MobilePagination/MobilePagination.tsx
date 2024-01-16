'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Typography from '@components/components/Typography/Typography';
import { useFilterSearchParams } from '@components/hooks';

import styles from './MobilePagination.module.scss';

interface MobilePaginationProps {
  totalPages: number;
}

const MobilePagination = ({ totalPages }: MobilePaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { queryParams } = useFilterSearchParams();

  const page =
    typeof searchParams.get('page') === 'string'
      ? Number(searchParams.get('page'))
      : 1;

  const handlePageClick = (pageNumber: number) => {
    router.push(`?page=${pageNumber}&perPage=9&${queryParams}#candles-section`);
  };

  return (
    <>
      {totalPages !== page && (
        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={() => handlePageClick(page + 1)}
          >
            <Typography variant="bodyRegular" color="var(--cl-primary-900)">
              Показати ще
            </Typography>
            <IoIosArrowRoundForward />
          </button>
        </li>
      )}
    </>
  );
};

export default MobilePagination;
