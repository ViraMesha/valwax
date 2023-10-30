'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import Button from '@components/components/Button/Button';
import Input from '@components/components/Input/Input';
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

interface CheckoutFormProps {
  dict: {
    contactFormTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    buttonText: string;
  };
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  dict: {
    contactFormTitle,
    firstName,
    lastName,
    email,
    phoneNumber,
    buttonText,
  },
}) => {
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

          <div>
            <label className={styles.label} htmlFor="phone">
              {phoneNumber}
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
      <Button variant="primary" type="submit" className={styles.button}>
        {buttonText}
      </Button>
    </form>
  );
};

export default CheckoutForm;
