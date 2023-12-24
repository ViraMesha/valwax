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
    deliveryReq,
    deliveryAreaReq,
    deliveryCityReq,
    postOfficeBranchNumReq,
    paymentReq,
    notesReq,
  } = data;
  return object().shape({
    firstName: string().trim().required(firstNameReq),
    lastName: string().trim().required(lastNameReq),
    email: string().trim().required(emailReq).matches(emailRegex, validEmail),
    phone: string().trim().required(phoneReq).matches(phoneRegex, validPhone),
    delivery: string().trim().required(deliveryReq),
    deliveryArea: object({
      label: string().required(deliveryAreaReq),
      ref: string().required(deliveryAreaReq),
      value: string().required(deliveryAreaReq),
    }).test({
      test: (value: any) => {
        return (
          value &&
          value.label !== undefined &&
          value.ref !== undefined &&
          value.value !== undefined
        );
      },
      message: deliveryAreaReq,
    }),
    deliveryCity: object({
      label: string().required(),
      ref: string().required(),
      value: string().required(),
    })
    .test({
      test: (value: any) => {
        return (
          value &&
          value.label !== undefined &&
          value.ref !== undefined &&
          value.value !== undefined
        );
      },
      message: deliveryCityReq,
    }),
    postOfficeBranchNum: object({
      label: string().required(),
      ref: string().required(),
      value: string().required(),
    }).test({
      test: (value: any) => {
        return (
          value &&
          value.label !== undefined &&
          value.ref !== undefined &&
          value.value !== undefined
        );
      },
      message: postOfficeBranchNumReq,
    }),
    payment: string().required(paymentReq),
    notes: string().trim().max(1000, notesReq),
  });
};

export default validationSchema;
