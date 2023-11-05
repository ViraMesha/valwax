import { Audio } from 'react-loader-spinner';

import styles from './LoaderComponent.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="var(--cl-primary-900)"
        ariaLabel="loading"
        wrapperStyle
        className="loader-audio"
      />
    </div>
  );
};

export default Loader;