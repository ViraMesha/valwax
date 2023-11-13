import { bool, object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^(\d{2}[-\s]?)(\d{3}[-\s]?)(\d{2}[-\s]?){2}$/;

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
    .matches(phoneRegex, 'Введіть дійсний номер телефону'),
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
  notes: string().max(1000),
});

export default validationSchema;
