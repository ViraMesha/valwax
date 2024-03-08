import { paramData } from '@components/components/CreateYourOwn/ConfiguratorSection/Configurator/configuratorData';
import { buildOrderDataI } from '@components/types';

export const buildOrderData = ({ dataForm, cartProducts, cartTotalPrice, dictParam}: buildOrderDataI) => {
  const {
    deliveryArea,
    deliveryCity,
    email,
    firstName,
    lastName,
    notes,
    phone,
    postOfficeBranchNum,
    payment,
    delivery,
  } = dataForm;


  const descriptionName = paramData(dictParam);

  const {candles, boxes, customCandles} = cartProducts;

  const items = [
    ...candles.map(({id, quantity, price}) => ({id, quantity, price, category: 'candle'})),
    ...boxes.map(({id, quantity, price, aroma}) => ({id, quantity, price, category: 'box', configuration: { aroma: descriptionName.aroma[aroma]}}))
  ]

  const customCandlesOrder = customCandles.map(({id, quantity, price, configuration}) => ({id, quantity, price, configuration: { 
    container: descriptionName.container[configuration.container],
    wax: descriptionName.wax[configuration.wax],
    aroma: descriptionName.aroma[configuration.aroma],
    wicks: configuration.wick + 1,
    color: descriptionName.color[configuration.color]
    }}))

  const objectOrder = {
    // id: null,
    customer: {
      firstName,
      lastName,
      phone: `+380${phone}`,
      email,
      address: `${deliveryArea.value} обл., ${deliveryCity.value}, ${postOfficeBranchNum.value}`,
      comment: notes,
      payment,
      delivery,
    },
    items,
    customCandles: customCandlesOrder,
    total: cartTotalPrice,
    payed: false,
    date: new Date(),
  };
  return objectOrder;
};
