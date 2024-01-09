import { paramData } from "@components/components/CreateYourOwn/ConfiguratorSection/Configurator/configuratorData";
import { CartProductI, CheckoutFormValues, configuratorSectionI } from "@components/types";

interface OrderGood {
  category: string;
  aroma?: string;
  quantity: number;
  description: string;
  id: string;
  price:number;
  name: string;
}

interface OrderCustomCandle {
  aroma: string;
  wax: string;
  color: string;
  wicks: number;
  container: string;
  quantity: number;
  price: number;
  total: number;
}

interface GoodsObject {
  items: OrderGood[];
  customCandles: OrderCustomCandle[];
}

const buildArryaGoods = (array: CartProductI[],   dictParam: configuratorSectionI):GoodsObject => {
  const items:OrderGood[] = [];
  const customCandles:OrderCustomCandle[] = [];

  array.forEach( ({id, title, configuration, price, quantity, link} )=> {
    let orderGood;
    const descriptionName = paramData(dictParam);
    
    switch (link) {
      case '/create-your-own':
        if (configuration 
            && typeof configuration.aroma === 'number' 
            && typeof configuration.wax === 'number'
            && typeof configuration.color === 'number'
            && typeof configuration.wick === 'number'
            && typeof configuration.container === 'number') {
          orderGood = {
            aroma: descriptionName.aroma[configuration.aroma],
            wax: descriptionName.wax[configuration.wax],
            color: descriptionName.color[configuration.color],
            wicks: configuration.wick + 1,
            container: descriptionName.container[configuration.container],
            quantity,
            price,
            total: quantity * price,
          };
          customCandles.push(orderGood);
        }
        break;

      case '/boxes':
        orderGood = {
          category: 'box',
          id,
          description: title,
          quantity,
          name: title,
          price,
          // aroma: description.aroma,
        };
        items.push(orderGood);
        break;

      default:
        orderGood = {
          category: 'candle',
          id,
          description: title,
          quantity,
          name: title,
          price,
        };
        items.push(orderGood);
        break;
    }

    return orderGood;
  });
  return { items, customCandles };
};


export const buildOrderData = (dataForm: CheckoutFormValues, dataCartGoods: CartProductI[], totalPrice: number,   dictParam: configuratorSectionI) => {
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
  } = dataForm;

  const { items, customCandles } = buildArryaGoods(dataCartGoods, dictParam);

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
    },
    items,
    customCandles: customCandles,
    total: totalPrice,
    payed: false,
    date: new Date(),
  };
  return objectOrder;
};
