'use client';
import { useRef, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import Typography from '@components/components/Typography/Typography';
import { useFilterContext } from '@context/FilterContext';

import styles from './FilterCategoryBlock.module.scss';

type FilterCategoryBlockI = {
  dict: {
    title: string;
    option: string[];
    volumeLabel?: string;
  };
  className?: string;
  handleSelectedFilterItems: (name: string, value: string) => void;
};

const FilterCategoryBlock: React.FC<FilterCategoryBlockI> = ({
  dict,
  className,
  handleSelectedFilterItems,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { isSelected } = useFilterContext();

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
                onClick={() => handleSelectedFilterItems(dict.title, item)}
                className={`${styles.checkbox} ${
                  isSelected(item) ? styles.checked : ''
                }`}
                // className={`${styles.checkbox} ${
                //   filterVar.indexOf(item) !== -1 && styles.checked
                // }`}
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
