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
 delivery: string().trim().required('You need to specify the delivery method'),
 deliveryArea: object().required('You need to specify the delivery region'),
  deliveryCity: object().required('You need to specify your city'),
postOfficeBranchNum: object().required(
 'You need to specify the branch number'
),
 payment: string().required('You need to specify the payment method.'),
 notes: string().trim().max(1000),
  });
};

export default validationSchema;
