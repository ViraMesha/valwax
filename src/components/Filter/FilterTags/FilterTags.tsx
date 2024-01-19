'use client';
import { IoClose } from 'react-icons/io5';
import Typography from '@components/components/Typography/Typography';
import { useFilterSearchParams } from '@components/hooks';
import { FilterTagsI } from '@components/types';

import styles from './FilterTags.module.scss';

const FilterTags: React.FC<FilterTagsI> = ({ dict }) => {
  const { toggleFilter, cleanFilter, filterValues } = useFilterSearchParams();

  const isFilterApplied = filterValues?.length !== 0;

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {filterValues.map(item => (
            <li key={item} className={styles.item}>
              <Typography variant="bodyS2" className={styles.txt}>
                {item}
              </Typography>
              <IoClose
                className={styles.icon}
                onClick={() => toggleFilter(item)}
              />
            </li>
          ))}
        </ul>
        {isFilterApplied && (
          <button className={styles.btn} onClick={cleanFilter}>
            <Typography
              variant="bodyS2"
              className={styles.txt}
              color={'var(--cl-gray-400)'}
            >
              {dict.cleanFilter}
            </Typography>
          </button>
        )}
      </div>
    </>
  );
};

export default FilterTags;
