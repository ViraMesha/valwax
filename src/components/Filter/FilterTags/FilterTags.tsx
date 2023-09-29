import { IoClose } from "react-icons/io5";
import Typography from '@components/components/Typography/Typography';

import styles from './FilterTags.module.scss';

  interface FilterTagsI {
    dict: {
      cleanFilter: string;
      //   tags: string[];
  };
}

const tags = ['cухий джин', 'грейпфрут і м’ята', 'бананово-горіховивий хліб', 'свіжа кава', 'червоний', 'зелений', '150 мл', '30 мл'];

const FilterTags: React.FC<FilterTagsI> = ({ dict }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {tags.map((tag)=> (
            <li key={tag} className={styles.item}>
              <Typography variant='bodyS2' className={styles.txt}>
                {tag}
              </Typography>
              <IoClose className={styles.icon}/>
            </li>
          ))}
        </ul>
        {true && <button className={styles.btn}>
          <Typography variant='bodyS2' className={styles.txt} color={'var(--cl-gray-400)'}>
            {dict.cleanFilter}
          </Typography>
        </button>}
      </div>
    </>
  );
};

export default FilterTags
