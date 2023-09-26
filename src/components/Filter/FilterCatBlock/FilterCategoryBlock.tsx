import { BsCheck } from "react-icons/bs";
import Typography from '@components/components/Typography/Typography';

import styles from './FilterCategoryBlock.module.scss';

interface FilterCategoryBlockI {
  dict: {
    title: string;
    option: string[];
  };
  className?: string;
}

const FilterCategoryBlock: React.FC<FilterCategoryBlockI> = ({ dict, className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Typography variant="bodyRegular" className={styles.subtitle}>
        {dict.title}
      </Typography>
      <ul className={styles.list}>
        {dict.option.map((item: string) => (
          <li key={item}>
              <label className={styles.checkbox}>
                <input type="checkbox" name={styles.subtitle} value={item} className={`${styles.visuallyHidden} ${styles.input}`}/>
                <div className={styles.check}>
                  <BsCheck />
                </div>
                <Typography variant="bodyRegular" className={styles.typography}>{item}</Typography>
              </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategoryBlock;
