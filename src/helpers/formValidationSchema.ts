import type { CheckoutFormValidation } from '@components/types';
import { bool, object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^(\d{2}[-\s]?)(\d{3}[-\s]?)(\d{2}[-\s]?){2}$/;

const validationSchema = (data: CheckoutFormValidation) => {
  const {
    firstNameReq,
    lastNameReq,
    emailReq,
    validEmail,
    phoneReq,
    validPhone,
  } = data;
  return object().shape({
    firstName: string().trim().required(`${firstNameReq}`),
    lastName: string().trim().required(`${lastNameReq}`),
    email: string()
      .trim()
      .required(`${emailReq}`)
      .matches(emailRegex, `${validEmail}`),
    phone: string()
      .trim()
      .required(`${phoneReq}`)
      .matches(phoneRegex, `${validPhone}`),
    // delivery: string()
    //   .required('Необхідно вказати спосіб доставки')
    //   .oneOf([
    //     'nova-poshta(post-office)',
    //     'nova-poshta(parcel-locker)',
    //     'ukr-poshta',
    //   ]),
    deliveryArea: object().required('Необхідно вказати область доставки'),
    deliveryCity: object().required('Необхідно вказати Ваше місто'),
    postOfficeBranchNum: object().required(
      'Необхідно вказати номер відділення'
    ),
    // cashOnDelivery: bool().oneOf([true, false]),
    // cardPayment: bool().oneOf([true, false]),
    notes: string().max(1000),
    payment: string(),
  });
};

export default validationSchema;
