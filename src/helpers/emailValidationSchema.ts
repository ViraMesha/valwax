import { object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailValidationSchema = object().shape({
  email: string()
    .trim()
    .required('Введіть email')
    .matches(emailRegex, 'Введіть дійсний email'),
});

export default emailValidationSchema;
