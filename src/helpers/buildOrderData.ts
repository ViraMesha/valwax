import { paramData } from '@components/components/CreateYourOwn/ConfiguratorSection/Configurator/configuratorData';
import { CheckoutFormValues, configuratorSectionI } from '@components/types';

export const buildOrderData = (
  dataForm: CheckoutFormValues,
  dataCartGoods: ICartProducts,
  totalPrice: number,
  dictParam: configuratorSectionI
) => {
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

  const {candles, boxes, customCandles} = dataCartGoods;

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
      address: `${deliveryArea.value} ${deliveryCity.value} ${postOfficeBranchNum.value}`,
      comment: notes,
      payment,
      delivery,
    },
    items,
    customCandles: customCandlesOrder,
    total: totalPrice,
    payed: false,
    date: new Date(),
  };
  return objectOrder;
};
