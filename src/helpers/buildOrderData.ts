import { CartProductI, CheckoutFormValues } from "@components/types";
// import { nanoid } from "nanoid";


const buildArryaGoods = (array: CartProductI[]) => {
  const arrayGoods = array.map( ({id, title, description, quantity, link} )=> {
    let orderGood;

    switch (link) {
      case '/create-your-own':
        if (description && typeof description !== 'string') {
          orderGood = {
            typeOrder: 'myCandle',
            aroma: description.aroma,
            wax: description.wax,
            waxColor: description.color,
            wick: description.wick,
            container: description.container,
            quantity: quantity,
          };
        }
        break;

      case '/boxes':
        orderGood = {
          typeOrder: 'box',
          idBox: id,
          description: title,
          quantity: quantity,
          // aroma: description.aroma,
        };
        break;

      default:
        orderGood = {
          typeOrder: 'candle',
          idCandle: id,
          description: title,
          quantity: quantity,
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