'use client';

import { useForm } from 'react-hook-form';
import Button from '@components/components/Button/Button';
import Input from '@components/components/Input/Input';
import { buildOrderData } from '@components/helpers/buildOrderData';
import validationSchema from '@components/helpers/formValidationSchema';
import { CheckoutFormProps, CheckoutFormValues } from '@components/types';
import { useCartContext } from '@context/CartContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendOrder } from '@lib/api-services/apiOrder';

import DeliveryForm from './DeliveryForm/DeliveryForm';

import styles from './CheckoutForm.module.scss';



const CheckoutForm: React.FC<CheckoutFormProps> = ({ dict }) => {
  const {
    contactFormTitle,
    firstName,
    lastName,
    email,
    phoneNumber,
    buttonText,
  } = dict;

  const { totalPrice, cartItems } = useCartContext();

  const formControl = useForm<CheckoutFormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = formControl;

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
    const newOrder = buildOrderData(data, cartItems, totalPrice);

    console.log(newOrder);
    sendOrder(newOrder);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.form__group}>
        <legend className={styles.group__title}>{contactFormTitle}</legend>
        <div className={styles.contactInfo__wrapper}>
          <Input
            label={`${firstName} *`}
            placeholder={firstName}
            id="user_firstName"
            required
            errorMessage={errors.firstName?.message}
            error={errors.firstName}
            {...register('firstName')}
          />
          <Input
            label={`${lastName} *`}
            placeholder={lastName}
            id="user_lastName"
            required
            errorMessage={errors.lastName?.message}
            error={errors.lastName}
            {...register('lastName')}
          />
          <Input
            label={`${email} *`}
            type="email"
            placeholder={email}
            id="user_email"
            required
            errorMessage={errors.email?.message}
            error={errors.email}
            {...register('email')}
          />

          <Input
            isPhone
            label={phoneNumber}
            type="tel"
            placeholder="93-000-00-00"
            id="phone"
            errorMessage={errors.phone?.message}
            error={errors.phone}
            {...register('phone')}
          />
        </div>
      </fieldset>

      <DeliveryForm dict={dict} formControl={formControl} />
      <Button
        variant="primary"
        type="submit"
        className={styles.button}
        onClick={() => console.log('click!')}
      >

        {buttonText}
      </Button>
    </form>
  );
};

export default CheckoutForm;
