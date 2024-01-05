'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toLowerCase, updateItemValues } from '@components/helpers';
import { FilterI } from '@components/types';
import { useFilterContext } from '@context/FilterContext';
import { useWindowSize } from 'usehooks-ts';

import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import FilterCategoryBlock from './FilterCatBlock/FilterCategoryBlock';

import styles from './Filter.module.scss';

const Filter: React.FC<FilterI> = ({ dict, className, closeModal }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const searchParamsValues = searchParams.entries();
  const params = [];

  //@ts-ignore
  for (let entry of searchParamsValues) {
    params.push(entry);
  }

  const filteredParams = params
    .filter(([key]) => key !== 'page' && key !== 'perPage')
    .reduce((result, [key, value]) => {
      const existingItem = result.find(
        (item: IFilterItem) => item.name === key
      );
      if (existingItem) {
        existingItem.values.push(value);
      } else {
        result.push({ name: key, values: [value] });
      }
      return result;
    }, []);

  const router = useRouter();

  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;

  const [selectedFilterItems, setSelectedFilterItems] = useState<
    IFilterItem[] | []
  >([]);

  const {
    configurationFilter,
    updateSortSetting,
    cleanFilter,
    toggleFilterParam,
  } = useFilterContext();

  const handleSelectedFilterItems = (name: string, value: string) => {
    toggleFilterParam(value);

    setSelectedFilterItems(prevItems => {
      const hasSelectedItems = prevItems.some(
        item => toLowerCase(item.name) === toLowerCase(name)
      );

      if (hasSelectedItems) {
        return prevItems.map(item => {
          if (toLowerCase(item.name) === toLowerCase(name)) {
            return updateItemValues({
              item,
              value,
            });
          }
          return item;
        });
      } else {
        return [
          ...prevItems,
          {
            name: toLowerCase(name),
            values: [value],
          },
        ];
      }
    });
  };

  useEffect(() => {
    const queryParams = selectedFilterItems
      .map(item => item.values.map(value => `${item.name}=${value}`))
      .flat()
      .join('&');

    if (!page && selectedFilterItems.length > 0) {
      router.push(`?${queryParams}#candles-section`);
    }

    if (page && selectedFilterItems.length > 0) {
      router.push(`?page=${page}&perPage=9&${queryParams}#candles-section`);
    }
  }, [page, router, selectedFilterItems]);

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
          handleSelectedFilterItems={handleSelectedFilterItems}
        />
        <FilterCategoryBlock
          dict={dict.category.color}
          className={styles.colorBlock}
          handleSelectedFilterItems={handleSelectedFilterItems}
        />
        <FilterCategoryBlock
          dict={dict.category.container}
          className={styles.containerBlock}
          handleSelectedFilterItems={handleSelectedFilterItems}
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
          <Button
            variant="light"
            className={styles.button}
            onClick={closeModal}
          >
            <Typography>{dict.result}</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
