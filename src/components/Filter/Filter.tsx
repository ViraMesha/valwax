import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import FilterCategoryBlock from './FilterCatBlock/FilterCategoryBlock';

import styles from './Filter.module.scss';

interface FilterI {
  dict: {
    title: string;
    subtitle: string;
    up: string;
    down: string;
    cleanUp: string;
    result: string;
    category: any;
  };
}

const Filter: React.FC<FilterI> = ({ dict }) => {
  return (
    <div className={styles.wrapper}>
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
      />
      <FilterCategoryBlock
        dict={dict.category.color}
        className={styles.colorBlock}
      />
      <FilterCategoryBlock
        dict={dict.category.container}
        className={styles.containerBlock}
      />
      {false && (
        <div className={styles.wrapperBtn}>
          <Button variant="dark">
            <Typography>{dict.cleanUp}</Typography>
          </Button>
          <Button variant="light">
            <Typography>{dict.result}</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
