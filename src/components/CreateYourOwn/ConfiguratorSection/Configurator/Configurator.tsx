'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '@components/components/Button/Button';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { nanoid } from 'nanoid';

import { useStateActionsContext } from '../../../../../context/StateContext';
import candleImg from '../../../../../public/images/candles/img-1.jpg';
import {
  ConfiguratorSectionI,
  CustomCandleDescription,
} from '../../../../types/index';

import Parameter from './Parameter/Parameter';
import { configuratorData } from './configuratorData';

import styles from './Configurator.module.scss';

const price = 560;

const Configurator: React.FC<ConfiguratorSectionI> = ({
  dict,
  dictGeneral,
}) => {
  const { container, wax, aroma, wick, color } = configuratorData(dict);

  const initParamCandle = {
    container: '',
    wax: '',
    aroma: '',
    wick: '',
    color: '',
  };

  const [paramCandle, setParamCendle] =
    useState<CustomCandleDescription>(initParamCandle);

  const { onAdd } = useStateActionsContext();
  const pathName = usePathname();
  const router = useRouter();
  const lang = pathName.split('/')[1];

  const product = {
    id: nanoid(),
    img: candleImg.src,
    title: 'A custom candle',
    description: paramCandle,
    price,
    link: '/create-your-own',
    quantity: 1,
  };

  const handleChangeCandleParam = (key: string, param: string) => {
    setParamCendle({ ...paramCandle, [key]: param });
  };

  const handleBuyNowButtonClick = () => {
    const allParamNotEmpty = Object.values(paramCandle).every(v => v !== '');
    if (allParamNotEmpty) {
      onAdd(product);
      router.push(`/${lang}/checkout`);
      return;
    }
    toast.warning(dictGeneral.messages.notAllParam);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <Parameter
          dict={container}
          onChangeParam={handleChangeCandleParam}
          parameter="container"
        />
        {/* <Parameter dict={capacity}/> */}
        <Parameter
          dict={wax}
          onChangeParam={handleChangeCandleParam}
          parameter="wax"
        />
        <Parameter
          dict={aroma}
          onChangeParam={handleChangeCandleParam}
          parameter="aroma"
        />
        <Parameter
          dict={wick}
          onChangeParam={handleChangeCandleParam}
          parameter="wick"
        />
        <Parameter
          dict={color}
          onChangeParam={handleChangeCandleParam}
          parameter="color"
        />
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
      <Button variant="primary" onClick={handleBuyNowButtonClick}>
        {dictGeneral.buttons.buyNow}
      </Button>
    </div>
  );
};

export default Configurator;
