'use client';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@components/components/Button/Button';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { useCandleParam } from '@components/helpers';
import { showToast } from '@components/helpers/showToast';
import { useCartActionsContext } from '@context/CartContext';
import { useParamsCandleActionContext } from '@context/ParamCandleContext';
import candleImg from '@images/candles/img-1.jpg';
import { nanoid } from 'nanoid';

import { ConfiguratorSectionI } from '../../../../types/index';

import Parameter from './Parameter/Parameter';
import { configuratorData } from './configuratorData';

import styles from './Configurator.module.scss';

const price = 560;

const Configurator: React.FC<ConfiguratorSectionI> = ({
  dict,
  dictGeneral,
}) => {
  const { container, wax, aroma, wick, color } = configuratorData(dict);

  const { paramCandle, handleChangeCandleParam } = useCandleParam();

  const { onAdd } = useCartActionsContext();
  const { cleanParamsCandle } = useParamsCandleActionContext();
  const pathName = usePathname();
  const router = useRouter();
  const lang = pathName.split('/')[1];

  const product = {
    id: nanoid(),
    img: candleImg.src,
    title: dictGeneral.titles.сustomCandle,
    description: paramCandle,
    configuration: paramCandle,
    price,
    link: '/create-your-own',
    quantity: 1,
  };

  const handleBuyNowButtonClick = () => {
    const allParamNotEmpty = Object.values(paramCandle).every(v => v !== '');
    if (allParamNotEmpty) {
      onAdd(product, 1, dictGeneral.messages.itemAdded);
      cleanParamsCandle()
      router.push(`/${lang}/checkout`);
      return;
    }
    showToast(dictGeneral.messages.notAllParam, 'warning');
  };

  return (
    <div className={styles.wrapper}>
      <ol className={styles.list}>
        <Parameter
          dict={container}
          currentParam={paramCandle['container']}
          onChangeParam={handleChangeCandleParam}
          parameter="container"
        />
        <Parameter
          dict={wax}
          currentParam={paramCandle['wax']}
          onChangeParam={handleChangeCandleParam}
          parameter="wax"
        />
        <Parameter
          dict={aroma}
          currentParam={paramCandle['aroma']}
          onChangeParam={handleChangeCandleParam}
          parameter="aroma"
        />
        <Parameter
          dict={wick}
          currentParam={paramCandle['wick']}
          onChangeParam={handleChangeCandleParam}
          parameter="wick"
        />
        <Parameter
          dict={color}
          currentParam={paramCandle['color']}
          onChangeParam={handleChangeCandleParam}
          parameter="color"
        />
      </ol>
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
      <Button variant="primary" onClick={handleBuyNowButtonClick}>
        {dictGeneral.buttons.buyNow}
      </Button>
    </div>
  );
};

export default Configurator;
