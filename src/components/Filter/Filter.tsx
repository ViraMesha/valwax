'use client';
import { useRouter } from 'next/navigation';
import { useFilterSearchParams } from '@components/hooks';
import { FilterI } from '@components/types';
import { useFilterContext } from '@context/FilterContext';

import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import FilterCategoryBlock from './FilterCatBlock/FilterCategoryBlock';

import styles from './Filter.module.scss';

const Filter: React.FC<FilterI> = ({ dict, className, closeModal }) => {
  const router = useRouter();
  const {
    cleanFilter,
    filterQuery,
    hasFetchQuery,
    updateSortSetting,
    sortSetting,
  } = useFilterSearchParams();

  const handleFilterResults = () => {
    closeModal && closeModal();
    if (filterQuery && !hasFetchQuery) {
      router.push(`?${filterQuery}&fetch=true#candles-section`);
    }
  };

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <div className={styles.wrapperFilter}>
        <Typography variant="bodyL" className={styles.title}>
          {dict.title}
        </Typography>
        <div className={styles.price}>
          <Typography variant="bodyRegular" className={styles.subtitle}>
            {dict.subtitle}
          </Typography>
          <button
            className={`${styles.btn} ${
              sortSetting === 'price' ? styles.btnActive : ''
            }`}
            onClick={() => updateSortSetting('price')}
          >
            <Typography variant="bodyRegular">{dict.up}</Typography>
          </button>
          <button
            className={`${styles.btn} ${
              sortSetting === 'price,desc' ? styles.btnActive : ''
            }`}
            onClick={() => updateSortSetting('price,desc')}
          >
            <Typography variant="bodyRegular">{dict.down}</Typography>
          </button>
        </div>
        <FilterCategoryBlock
          dict={dict.category.aroma}
          className={styles.aromaBlock}
          category="aroma"
        />
        <FilterCategoryBlock
          dict={dict.category.color}
          className={styles.colorBlock}
          category="color"
        />
        <FilterCategoryBlock
          dict={dict.category.container}
          className={styles.containerBlock}
          category="volume"
        />
      </div>
      <div className={styles.wrapperBtn}>
        <Button variant="dark" className={styles.button} onClick={cleanFilter}>
          <Typography>{dict.cleanUp}</Typography>
        </Button>
        <Button
          variant="light"
          className={styles.button}
          onClick={handleFilterResults}
        >
          <Typography>{dict.result}</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Filter;
