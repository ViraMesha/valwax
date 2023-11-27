'use client';
import { IoClose } from 'react-icons/io5';
import Typography from '@components/components/Typography/Typography';
import { FilterTagsI } from '@components/types';

import { useFilterContext } from '../../../../context/FilterContext';

import styles from './FilterTags.module.scss';


const FilterTags: React.FC<FilterTagsI> = ({ dict }) => {
  const { configurationFilter, modifyFilter, cleanFilter } = useFilterContext();

  const isFilterApplied =
    configurationFilter.filterParam.length === 0 ? false : true;

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {configurationFilter.filterParam.map(item => (
            <li key={item} className={styles.item}>
              <Typography variant="bodyS2" className={styles.txt}>
                {item}
              </Typography>
              <IoClose
                className={styles.icon}
                onClick={() => modifyFilter(item)}
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
