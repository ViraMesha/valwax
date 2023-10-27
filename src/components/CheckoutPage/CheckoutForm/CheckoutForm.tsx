'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import Button from '@components/components/Button/Button';
import Input from '@components/components/Input/Input';
import Select from '@components/components/Select/Select';
import validationSchema from '@components/helpers/formValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhoneNumberUtil } from 'google-libphonenumber';

import 'react-international-phone/style.css';
import styles from './CheckoutForm.module.scss';

const phoneUtil = PhoneNumberUtil.getInstance();

const validatePhone = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

type CheckoutFormValues = {
  // cashOnDelivery?: boolean | undefined;
  // cardPayment?: boolean | undefined;
  // comment?: string | undefined;
  phone?: string;
  firstName: string;
  lastName: string;
  email: string;
  // post: string;
  // deliveryArea: string;
  // deliveryCity: string;
  // postOfficeBranchNum: string;
};

const CheckoutForm = () => {
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);

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
    data.phone = phone;
    console.log(data);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.form__group}>
        <legend className={styles.group__title}>Контактні дані</legend>
        <div className={styles.contactInfo__wrapper}>
          <Input
            label={`Ім’я *`}
            placeholder={`Ім’я`}
            id="user_firstname"
            required
            errorMessage={errors.firstName?.message}
            error={errors.firstName}
            {...register('firstName')}
          />
          <Input
            label="Прізвище *"
            placeholder="Прізвище"
            id="user_lastname"
            required
            errorMessage={errors.lastName?.message}
            error={errors.lastName}
            {...register('lastName')}
          />
          <Input
            label="Email *"
            type="email"
            placeholder="Email"
            id="user_email"
            required
            errorMessage={errors.email?.message}
            error={errors.email}
            {...register('email')}
          />

          <div>
            <label className={styles.label} htmlFor="phone">
              Введіть номер телефону
            </label>
            <PhoneInput
              inputProps={{
                id: 'phone',
              }}
              defaultCountry="ua"
              value={phone}
              showDisabledDialCodeAndPrefix
              disableDialCodeAndPrefix
              className={styles.phoneInput__container}
              onChange={phone => setPhone(phone)}
              placeholder="93-000-00-00"
              onBlur={() => setIsValidPhone(validatePhone(phone))}
            />
            {!isValidPhone && (
              <p className={styles.error}>Phone is not valid</p>
            )}
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.form__group}>
        <legend className={styles.group__title}>Доставка</legend>
        <div className={styles.contactInfo__wrapper}>
          <Select options={options} label="Оберіть область доставки *" />
        </div>
      </fieldset>
      <Button variant="primary" type="submit" className={styles.button}>
        Оформити замовлення
      </Button>
    </form>
  );
};

export default CheckoutForm;
