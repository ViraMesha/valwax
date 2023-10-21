import Typography from '@components/components/Typography/Typography';

import styles from './Price.module.scss';

const Price = ({
  priceContainerClassName,
  priceStyle,
}: {
  priceContainerClassName?: string;
  priceStyle?: string;
}) => {
  return (
    <div
      className={`${styles.price__container} ${priceContainerClassName || ''}`}
    >
      <Typography
        variant="subheadingMobile"
        color="var(--cl-primary-500)"
        className={`${priceStyle || ''}`}
      >
        550
      </Typography>
      <span>&#8372;</span>
    </div>
  );
};

export default Price;
