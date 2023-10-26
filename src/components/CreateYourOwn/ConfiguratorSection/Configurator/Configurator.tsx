import Button from '@components/components/Button/Button';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';

import { ConfiguratorSectionI } from '../../../../types/index';

import Parameter from './Parameter/Parameter';
import { configuratorData } from './configuratorData';

import styles from './Configurator.module.scss';

const price = 560;

const Configurator: React.FC<ConfiguratorSectionI> = ({
  dict,
  dictGeneral,
}) => {
  const data = configuratorData(dict);

  return (
    <div className={styles.warpper}>
      <ul className={styles.list}>
        <Parameter dict={data.container} />
        {/* <Parameter dict={data.capacity}/> */}
        <Parameter dict={data.wax} />
        <Parameter dict={data.aroma} />
        <Parameter dict={data.wick} />
        <Parameter dict={data.color} />
      </ul>
      <div className={styles.warpperPrice}>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-500)"
          className={styles.price}
        >
          {dictGeneral.titles.price}
        </Typography>
        <Price price={price} />
      </div>
      <Button variant='primary'>
        {dictGeneral.buttons.buyNow}
      </Button>
    </div>
  );
};

export default Configurator;
