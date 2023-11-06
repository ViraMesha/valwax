import { bool, object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\+38 \(\d{3}\) \d{3} \d{4}$/;

const validationSchema = object().shape({
  firstName: string().trim().required("Введіть ім'я"),
  lastName: string().trim().required('Введіть прізвище'),
  email: string()
    .trim()
    .required('Введіть email')
    .matches(emailRegex, 'Введіть дійсний email'),
  phone: string()
    .trim()
    .required("Телефон є обов'язковим полем")
    .matches(phoneRegex, 'Введіть номер телефону у форматі +38 (067) 333 4444'),
  delivery: string()
    .required('Необхідно вказати спосіб доставки')
    .oneOf([
      'nova-poshta(post-office)',
      'nova-poshta(parcel-locker)',
      'ukr-poshta',
    ]),
  deliveryArea: string().required('Необхідно вказати область доставки'),
  deliveryCity: string().required('Необхідно вказати Ваше місто'),
  postOfficeBranchNum: string().required('Необхідно вказати номер відділення'),
  // cashOnDelivery: bool().oneOf([true, false]),
  // cardPayment: bool().oneOf([true, false]),
  // comment: string().max(1000),
});

export default validationSchema;
