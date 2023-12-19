'use client';
import { FilterI } from '@components/types';
import { useFilterContext } from '@context/FilterContext';
import { useWindowSize } from 'usehooks-ts';

import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import FilterCategoryBlock from './FilterCatBlock/FilterCategoryBlock';

import styles from './Filter.module.scss';

const Filter: React.FC<FilterI> = ({ dict, className, closeModal }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;

  const { configurationFilter, updateSortSetting, cleanFilter } =
    useFilterContext();

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
              configurationFilter.sortSetting === dict.up
                ? styles.btnActive
                : ''
            }`}
            onClick={() => updateSortSetting(dict.up)}
          >
            <Typography variant="bodyRegular">{dict.up}</Typography>
          </button>
          <button
            className={`${styles.btn} ${
              configurationFilter.sortSetting === dict.down
                ? styles.btnActive
                : ''
            }`}
            onClick={() => updateSortSetting(dict.down)}
          >
            <Typography variant="bodyRegular">{dict.down}</Typography>
          </button>
        </div>
        <FilterCategoryBlock
          dict={dict.category.aroma}
          className={styles.aromaBlock}
        />
        <FilterCategoryBlock
          dict={dict.category.color}
          className={styles.colorBlock}
        />
        <FilterCategoryBlock
          dict={dict.category.container}
          className={styles.containerBlock}
        />
      </div>
      {!isLargeScreen && (
        <div className={styles.wrapperBtn}>
          <Button
            variant="dark"
            className={styles.button}
            onClick={cleanFilter}
          >
            <Typography>{dict.cleanUp}</Typography>
          </Button>
          <Button variant="light" className={styles.button} onClick={closeModal}>
            <Typography>{dict.result}</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
