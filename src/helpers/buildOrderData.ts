import { CartProductI, CheckoutFormValues } from "@components/types";
// import { nanoid } from "nanoid";


const buildArryaGoods = (array: CartProductI[]) => {
  const arrayGoods = array.map(item => {
    let orderGood;

    switch (item.link) {
      case '/create-your-own':
        if (item.description && typeof item.description !== 'string') {
          orderGood = {
            typeOrder: 'myCandle',
            aroma: item.description.aroma,
            wax: item.description.wax,
            waxColor: item.description.color,
            wick: item.description.wick,
            container: item.description.container,
            quantity: item.quantity,
          };
        }
        break;

      case '/boxes':
        orderGood = {
          typeOrder: 'box',
          idBox: item.id,
          description: item.description,
          quantity: item.quantity,
          // aroma: item.description.aroma,
        };
        break;

      default:
        orderGood = {
          typeOrder: 'candle',
          idCandle: item.id,
          description: item.description,
          quantity: item.quantity,
        };
        break;
    }

    return orderGood;
  });

  return arrayGoods;
};


export const buildOrderData = (dataForm: CheckoutFormValues, dataCartGoods: CartProductI[], totalPrice: number) => {
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

  const arrayGoods = buildArryaGoods(dataCartGoods);

  const objectOrder = {
  // orderId: nanoid(),
    client: {
    firstName,
      lastName,
      number: `+380${phone}`,
      email,
      comment: notes,
      shippingAddress: `${deliveryArea.value} ${deliveryCity.value} ${postOfficeBranchNum.value}`,
      payment,
    },
    goods: arrayGoods,
    totalPrice,
    timestamp: new Date(),
  };
  return objectOrder;
};