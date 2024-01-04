'use client';
import { useRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import Typography from '@components/components/Typography/Typography';
import { useFilterContext } from '@context/FilterContext';

import styles from './FilterCategoryBlock.module.scss';

type FilterCategoryBlockI = {
  dict: {
    title: string;
    option: string[];
  };
  className?: string;
};

const FilterCategoryBlock: React.FC<FilterCategoryBlockI> = ({
  dict,
  className,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { toggleFilterParam, isSelected } = useFilterContext();

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
                onClick={() => toggleFilterParam(item)}
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
                  {item}
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
