'use client';
import { useRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import Typography from '@components/components/Typography/Typography';
import { useFilterSearchParams } from '@components/hooks';

import styles from './FilterCategoryBlock.module.scss';

type FilterCategoryBlockI = {
  dict: {
    title: string;
    option: string[];
    volumeLabel?: string;
  };
  className?: string;
  category: string;
};

const FilterCategoryBlock: React.FC<FilterCategoryBlockI> = ({
  dict,
  className,
  category,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { filterValues, toggleFilter } = useFilterSearchParams();

  const isSelected = (item: string) => {
    return filterValues.includes(item);
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Typography variant="bodyRegular" className={styles.subtitle}>
        {dict.title}
      </Typography>
      <div className={styles.wrapperList}>
        <CustomScrollBar root={scrollContainerRef}>
          <ul className={styles.list}>
            {dict.option.map((item: string, index: number) => (
              <li
                key={index}
                onClick={() => toggleFilter(item, category)}
                className={`${styles.checkbox} ${
                  isSelected(item) ? styles.checked : ''
                }`}
              >
                <div className={styles.check}>
                  <BsCheck />
                </div>
                <Typography
                  variant="bodyRegular"
                  className={styles.typography}
                  color="--cl-gray-200"
                >
                  {item} {dict.volumeLabel && dict.volumeLabel}
                </Typography>
              </li>
            ))}
          </ul>
        </CustomScrollBar>
      </div>
    </div>
  );
};

export default FilterCategoryBlock;
