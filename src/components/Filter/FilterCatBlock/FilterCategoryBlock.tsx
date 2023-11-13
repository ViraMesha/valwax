import { useRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import Typography from '@components/components/Typography/Typography';

import styles from './FilterCategoryBlock.module.scss';

interface FilterCategoryBlockI {
  dict: {
    title: string;
    option: string[];
  };
  className?: string;
}

const FilterCategoryBlock: React.FC<FilterCategoryBlockI> = ({
  dict,
  className,
}) => {

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Typography variant="bodyRegular" className={styles.subtitle}>
        {dict.title}
      </Typography>
      <div className={styles.wrapperList}>
        <CustomScrollBar root={scrollContainerRef}>
      <ul className={styles.list}>
          {dict.option.map((item: string) => (
            <li key={item}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name={styles.subtitle}
                  value={item}
                  // onChange={}
                  className={`${styles.visuallyHidden} ${styles.input}`}
                />
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
              </label>
            </li>
          ))}
      </ul>
        </CustomScrollBar>
      </div>
    </div>
  );
};

export default FilterCategoryBlock;
