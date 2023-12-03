'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@components/components/Button/Button';
import Input from '@components/components/Input/Input';
import validationSchema from '@components/helpers/formValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import DeliveryForm from './DeliveryForm/DeliveryForm';

import styles from './CheckoutForm.module.scss';

export interface Option {
  value: string;
  label: string;
}

type CheckoutFormValues = {
  // cashOnDelivery?: boolean | undefined;
  // cardPayment?: boolean | undefined;
  // comment?: string | undefined;
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  delivery: string;
  deliveryArea: string;
  deliveryCity: string;
  postOfficeBranchNum: string;
};

interface CheckoutFormProps {
  dict: {
    contactFormTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    buttonText: string;
    delivery: string;
    deliveryOptions: string[];
    areaLabel: string;
    areaPlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    warehouseLabel: string;
    warehousePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
  };
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({dict}) => {

  const {
    contactFormTitle,
    firstName,
    lastName,
    email,
    phoneNumber,
    buttonText,
  } = dict;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<CheckoutFormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
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

      <DeliveryForm
        dict={dict}
      />
      <Button variant="primary" type="submit" className={styles.button}>
        {buttonText}
      </Button>
    </form>
  );
};

export default CheckoutForm;
