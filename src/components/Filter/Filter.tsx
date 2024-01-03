'use client';
import { useState } from 'react';
import {
  extractVolumeValue,
  toLowerCase,
  updateItemValues,
} from '@components/helpers';
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
              extractedVolumeValue: extractVolumeValue({
                name,
                value,
                categoryTitle: dict.category.container.title,
              }),
            });
          }
          return item;
        });
      } else {
        return [
          ...prevItems,
          {
            name: toLowerCase(name),
            values: [
              extractVolumeValue({
                name,
                value,
                categoryTitle: dict.category.container.title,
              }) || value,
            ],
          },
        ];
      }
    });
  };

  // const buildQueryString = () => {
  //   const queryParams = selectedFilterItems
  //     .map((item) =>
  //       item.values.map((value) => `${item.name}=${encodeURIComponent(value)}`)
  //     )
  //     .flat();
  // const otherParams = [
  //   `lang=${encodeURIComponent(currentLang)}`,
  //   `wax=${encodeURIComponent(wax)}`,
  //   `page=${currentPage > 1 ? currentPage - 1 : 0}`,
  //   `size=${encodeURIComponent(perPage)}`,
  // ];

  // // Combine all parameters
  // const queryString = [...otherParams, ...queryParams].join('&');

  // return `${BASE_URL}/candles?${queryString}`;
  //};

  //   // Example usage:
  // const fetchCandles = () => {
  //   const url = buildQueryString();

  //   // Perform your fetch request using the constructed URL
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Process the fetched data
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //     });
  // };

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
