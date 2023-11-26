'use client';
import { useEffect, useRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import Typography from '@components/components/Typography/Typography';

import { useFilterContext } from '../../../../context/FilterContext';

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

  const { filterVar, modifyFilter } = useFilterContext();
  // const foo = ['2', '3', '4'];

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
                onClick={() => modifyFilter(item)}
                className={`${styles.checkbox} ${filterVar.includes(item) && styles.checked}`}
                // className={`${styles.checkbox} ${
                //   filterVar.indexOf(item) !== -1 && styles.checked
                // }`}
              >
                {/* <input
                    id={item}
                    type="checkbox"
                    name={styles.subtitle}
                    value={item}
                    // checked={filterVar.includes(item)}
                    checked={false}
                    // onChange={}
                    className={`${styles.visuallyHidden} ${styles.input}`}
                  /> */}

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
