'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import Button from '@components/components/Button/Button';
import CustomSelect from '@components/components/CustomSelect/CustomSelect';
import Input from '@components/components/Input/Input';
import validationSchema from '@components/helpers/formValidationSchema';
import { AreaData, SelectOptions } from '@components/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhoneNumberUtil } from 'google-libphonenumber';
import debounce from 'lodash/debounce';

import { fetchAreas, fetchCities, fetchWarehouses } from './api';

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

export interface Option {
  value: string;
  label: string;
}

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

  const [areas, setAreas] = useState<AreaData[]>([]);
  const [cities, setCities] = useState<AreaData[]>([]);
  const [warehouse, setWarehouse] = useState<AreaData[]>([]);

  const [inputCity, setInputCity] = useState<string>('');

  const [selectedAreas, setSelectedAreas] = useState<SelectOptions | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<SelectOptions | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] =
    useState<SelectOptions | null>(null);

  const [isAreaSelectOpen, setIsAreaSelectOpen] = useState(false);
  const [isCitySelectOpen, setIsCitySelectOpen] = useState(false);
  const [isWarehouseSelectOpen, setIsWarehouseSelectOpen] = useState(false);

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

  const handleSelectArea = (value: SelectOptions) => {
    console.log('SelectArea', value);
    setSelectedAreas(value);
  };

  const handleSelectCity = debounce(async (value: SelectOptions) => {
    // console.log('value', value);
    setInputCity(JSON.stringify(value));

    setSelectedCity(value);
    // console.log('value 2', value);
  }, 300);

  const handleSelectWarehouse = (value: SelectOptions) => {
    setSelectedWarehouse(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isAreaSelectOpen) {
        const areasData = await fetchAreas();
        if (areasData) {
          setAreas(areasData);
          setIsAreaSelectOpen(false);
        }
      }
    };
    fetchData();

    const fetchDataCity = async () => {
      if (isCitySelectOpen && selectedAreas) {
        const citiesData = await fetchCities(selectedAreas.ref, inputCity);
        if (citiesData) {
          setCities(citiesData);
          setIsCitySelectOpen(false);
        }
      }
    };
    fetchDataCity();

    const fetchDataWarehouse = async () => {
      if (isWarehouseSelectOpen && selectedAreas && selectedCity) {
        const warehouseData = await fetchWarehouses(selectedCity.value);
        console.log('selectedCity', selectedCity);
        console.log('selectedCity.ref', selectedCity.ref);

        if (warehouseData) {
          setWarehouse(warehouseData);
          setIsWarehouseSelectOpen(false);
        }
      }
    };
    fetchDataWarehouse();
  }, [
    cities,
    inputCity,
    isAreaSelectOpen,
    isCitySelectOpen,
    isWarehouseSelectOpen,
    selectedAreas,
    selectedCity,
  ]);

  const selectOptionsArea = areas.map(option => ({
    ref: option.Ref,
    value: option.Description,
    label: option.Description,
  }));

  const selectOptionsCity = cities.map(option => ({
    ref: option.Ref,
    value: option.Description,
    label: option.Description,
  }));

  const selectOptionsWarehouse = warehouse.map(option => ({
    ref: option.Ref,
    value: option.Description,
    label: option.Description,
  }));

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
          <CustomSelect
            value={selectedAreas}
            onMenuOpen={() => {
              setIsAreaSelectOpen(true);
            }}
            onChange={value => handleSelectArea(value)}
            options={selectOptionsArea}
            label="Оберіть область доставки *"
            placeholder="Область"
          />
          <CustomSelect
            value={selectedCity}
            onMenuOpen={() => {
              setIsCitySelectOpen(true);
            }}
            onChange={value => handleSelectCity(value)}
            options={selectOptionsCity}
            label="Оберіть ваше місто *"
            placeholder="Місто"
          />
          <CustomSelect
            value={selectedWarehouse}
            onChange={value => handleSelectWarehouse(value)}
            options={selectOptionsWarehouse}
            onMenuOpen={() => {
              setIsWarehouseSelectOpen(true);
            }}
            label="Оберіть номер відділення або поштомату *"
            placeholder="Номер відділення або поштомату"
          />
        </div>
      </fieldset>
      <Button variant="primary" type="submit" className={styles.button}>
        Оформити замовлення
      </Button>
    </form>
  );
};

export default CheckoutForm;
