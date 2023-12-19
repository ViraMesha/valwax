import { useEffect, useState } from 'react';
import { CandleApiResponse } from '@components/types';

// Custom hook for fetching totalPages
const useTotalPages = (promise: Promise<CandleApiResponse>) => {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const { totalPages } = await promise;
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching totalPages:', error);
      }
    };

    fetchTotalPages();
  }, [promise]);

  return totalPages;
};

export default useTotalPages;
