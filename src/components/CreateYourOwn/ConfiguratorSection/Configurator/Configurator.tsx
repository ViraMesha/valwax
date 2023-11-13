import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { nanoid } from 'nanoid';

import candleImg from '../../../../../public/images/candles/img-1.jpg';
import { ConfiguratorSectionI } from '../../../../types/index';

import ConfiguratorBuyNowBtn from './ConfiguratorBuyNowBtn/ConfiguratorBuyNowBtn';
import Parameter from './Parameter/Parameter';
import { configuratorData } from './configuratorData';

import styles from './Configurator.module.scss';

const price = 560;

const Configurator: React.FC<ConfiguratorSectionI> = ({
  dict,
  dictGeneral,
}) => {
  const { container, wax, aroma, wick, color } = configuratorData(dict);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <Parameter dict={container} />
        {/* <Parameter dict={capacity}/> */}
        <Parameter dict={wax} />
        <Parameter dict={aroma} />
        <Parameter dict={wick} />
        <Parameter dict={color} />
      </ul>
      <div className={styles.wrapperPrice}>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-500)"
          className={styles.price}
        >
          {dictGeneral.titles.price}
        </Typography>
        <Price price={price} />
      </div>
      <ConfiguratorBuyNowBtn
        product={{
          id: nanoid(),
          img: candleImg.src,
          title: 'A custom candle',
          description: {
            container: 'Тара 1',
            wax: 'Соєвий',
            aroma: 'Чиста Бавовна',
            wick: 'Один',
            color: 'Жовтий',
          },
          price,
          link: '/create-your-own',
          quantity: 1,
        }}
      >
        {dictGeneral.buttons.buyNow}
      </ConfiguratorBuyNowBtn>
    </div>
  );
};

export default Configurator;
