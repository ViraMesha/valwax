import {  object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^(\d{2}[-\s]?)(\d{3}[-\s]?)(\d{2}[-\s]?){2}$/;

const validationSchema = object().shape({
  firstName: string().trim().required('Enter the name'),
  lastName: string().trim().required('Enter the surname'),
  email: string()
    .trim()
    .required('Enter the email')
    .matches(emailRegex, 'Enter a valid email'),
  phone: string()
    .trim()
    .required('The phone number is a required field')
    .matches(phoneRegex, 'Enter a valid phone number'),
  delivery: string().trim().required('You need to specify the delivery method'),
  deliveryArea: object().required('You need to specify the delivery region'),
  deliveryCity: object().required('You need to specify your city'),
  postOfficeBranchNum: object().required(
    'You need to specify the branch number'
  ),
  payment: string().required('You need to specify the payment method.'),
  notes: string().trim().max(1000),
});

export default validationSchema;
