'use client';
import { FilterII } from '@components/types';
import { useWindowSize } from 'usehooks-ts';

import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import FilterCategoryBlock from './FilterCatBlock/FilterCategoryBlock';

import styles from './Filter.module.scss';
// import { useState } from 'react';
// import { boolean } from 'yup';
// import { useFilter } from '../../../context/FilterContext';



const Filter: React.FC<FilterII> = ({ dict, className }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;

  // const [filterVar, setFilterVar] = useState <string[]> ([]);

  // const handleModifyFilter = (param: string) => {
  //   if (filterVar.includes(param)) {
  //     setFilterVar(filterVar.filter(par => par !== param))
  //     return
  //   }
  //   // setFilterVar([...filterVar, param])
  //   const newFilterVar=[...filterVar, param]
  //   setFilterVar(newFilterVar)
  //   console.log('newFilterVar', newFilterVar)
  //   console.log(filterVar)
  // }

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
          <button className={styles.btn}>
            <Typography variant="bodyRegular">{dict.up}</Typography>
          </button>
          <button className={styles.btn}>
            <Typography variant="bodyRegular">{dict.down}</Typography>
          </button>
        </div>
        <FilterCategoryBlock
          dict={dict.category.aroma}
          className={styles.aromaBlock}
          // onModifyFilter={modifyFilter}
        />
        <FilterCategoryBlock
          dict={dict.category.color}
          className={styles.colorBlock}
          // onModifyFilter={modifyFilter}
        />
        <FilterCategoryBlock
          dict={dict.category.container}
          className={styles.containerBlock}
          // onModifyFilter={modifyFilter}
        />
      </div>
      {!isLargeScreen && (
        <div className={styles.wrapperBtn}>
          <Button variant="dark" className={styles.button}>
            <Typography>{dict.cleanUp}</Typography>
          </Button>
          <Button variant="light" className={styles.button}>
            <Typography>{dict.result}</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
