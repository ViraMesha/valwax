'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { PhoneInput } from 'react-international-phone';
// import Button from '@components/components/Button/Button';
import CustomSelect from '@components/components/CustomSelect/CustomSelect';
import Input from '@components/components/Input/Input';
import validationSchema from '@components/helpers/formValidationSchema';
import { AreaData, SelectOptions } from '@components/types';
import { yupResolver } from '@hookform/resolvers/yup';
// import { PhoneNumberUtil } from 'google-libphonenumber';
import debounce from 'lodash/debounce';

// import { useDeliveryContext } from '../../../../../context/DeliveryContext';
import {
  fetchAreas,
  fetchAreasUkr,
  fetchCities,
  fetchCitiesUkr,
  fetchWarehouses,
  fetchWarehousesUkr,
} from '../api';
import RadioButtons from '../RadioButtons/RadioButtons';

// import 'react-international-phone/style.css';
import styles from './DeliveryForm.module.scss';

type DeliveryFormValues = {
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

interface DeliveryFormProps {
  delivery: string;
  deliveryOptions: string[];
  paymentOptions: string[];
  areaLabel: string;
  areaPlaceholder: string;
  cityLabel: string;
  cityPlaceholder: string;
  warehouseLabel: string;
  warehousePlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({
  delivery,
  deliveryOptions,
  paymentOptions,
  areaLabel,
  areaPlaceholder,
  cityLabel,
  cityPlaceholder,
  warehouseLabel,
  warehousePlaceholder,
  notesLabel,
  notesPlaceholder,
}) => {
  const [areas, setAreas] = useState<AreaData[]>([]);
  const [cities, setCities] = useState<AreaData[]>([]);
  const [warehouse, setWarehouse] = useState<AreaData[]>([]);

  const [selectedAreas, setSelectedAreas] = useState<SelectOptions | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<SelectOptions | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] =
    useState<SelectOptions | null>(null);

  const [isAreaSelectOpen, setIsAreaSelectOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);
 

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<DeliveryFormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });

  // const onSubmit = (data: DeliveryFormValues) => {
  //   data.phone = phone;
  //   console.log(data);
  // };

  const handleSelectArea = (value: SelectOptions) => {
    setCities([]);
    setWarehouse([]);
    setSelectedCity(null);
    setSelectedWarehouse(null);
    setSelectedAreas(value);
  };

  const handleSelectCity = debounce(async (value: SelectOptions) => {
    setSelectedWarehouse(null);
    setWarehouse([]);

    setSelectedCity(value);
  }, 300);

  const handleSelectWarehouse = (value: SelectOptions) => {
    setSelectedWarehouse(null);
    setWarehouse([]);

    setSelectedWarehouse(value);
  };

  const handleOrderNotesChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setOrderNotes(newValue);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const areasData = await (selectedDelivery === deliveryOptions[2]
      ? fetchAreasUkr()
      : fetchAreas());
    setIsLoading(false);

    if (areasData) {
      setAreas(areasData);
      setIsAreaSelectOpen(false);
    }
  };

  const fetchDataCity = async () => {
    if (selectedAreas && !selectedCity && cities.length === 0) {
      setIsLoading(true);
      const citiesData = await (selectedDelivery === deliveryOptions[2]
        ? fetchCitiesUkr(selectedAreas.ref)
        : fetchCities(selectedAreas.ref));
      console.log('citiesData', citiesData);
      setIsLoading(false);

      if (citiesData) {
        setCities(citiesData);
      }
    }
  };

  const fetchDataWarehouse = async () => {
    if (selectedAreas && selectedCity && selectedDelivery) {
      setIsLoading(true);
      setWarehouse([]);

      const warehouseData = await (selectedDelivery === deliveryOptions[2]
        ? fetchWarehousesUkr(selectedCity.ref)
        : fetchWarehouses(selectedDelivery, selectedCity.value));

      if (warehouseData) {
        setIsLoading(false);
        console.log(warehouseData);
        setWarehouse(warehouseData);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

    if (selectedAreas && !selectedCity && cities.length === 0) {
      fetchDataCity();
    }

    fetchDataWarehouse();
  }, [cities, isAreaSelectOpen, selectedAreas, selectedCity, selectedDelivery]);

  useEffect(() => {
    if ((selectedDelivery ===  deliveryOptions[2] && areas.length === 25) || (selectedDelivery !==  deliveryOptions[2] && areas.length === 26)) {
      fetchData();
      setSelectedAreas(null)
      setAreas([])
      setSelectedCity(null)
      setCities([])
    }
    setSelectedWarehouse(null);
    setWarehouse([]);
  }, [selectedDelivery]);

  const selectOptionsArea = areas.map(option =>
    selectedDelivery === deliveryOptions[2]
      ? {
          ref: option.REGION_ID,
          value: option.REGION_UA,
          label: option.REGION_UA,
        }
      : {
          ref: option.Ref,
          value: option.Description,
          label: option.Description,
        }
  );

  const selectOptionsCity = cities.map(option =>
    selectedDelivery === deliveryOptions[2]
      ? {
          ref: option.CITY_ID,
          value: option.CITY_UA,
          label: option.CITY_UA,
        }
      : {
          ref: option.Ref,
          value: option.Description,
          label: option.Description,
        }
  );

  const selectOptionsWarehouse = warehouse.map(option =>
    selectedDelivery === deliveryOptions[2]
      ? {
          ref: option.POSTOFFICE_ID,
          value: option.POSTOFFICE_UA,
          label: option.POSTOFFICE_UA,
        }
      : {
          ref: option.Ref,
          value: option.Description,
          label: option.Description,
        }
  );

  return (
    <fieldset className={styles.form__group}>
      <legend className={styles.group__title}>{delivery}</legend>
      <RadioButtons
        options={deliveryOptions}
        onChangeSelector={setSelectedDelivery}
        checkedSelector={selectedDelivery}
      />
      <div className={styles.contactInfo__wrapper}>
        <CustomSelect
          value={selectedAreas}
          onMenuOpen={() => {
            setIsAreaSelectOpen(true);
          }}
          onChange={value => handleSelectArea(value)}
          options={selectOptionsArea}
          label={areaLabel}
          placeholder={areaPlaceholder}
          isLoading={isLoading}
        />
        <CustomSelect
          value={selectedCity}
          onChange={value => handleSelectCity(value)}
          options={selectOptionsCity}
          label={cityLabel}
          placeholder={cityPlaceholder}
          isLoading={isLoading}
        />
        <CustomSelect
          value={selectedWarehouse}
          onChange={value => handleSelectWarehouse(value)}
          options={selectOptionsWarehouse}
          label={warehouseLabel}
          placeholder={warehousePlaceholder}
          isLoading={isLoading}
        />
      </div>
        <RadioButtons
          options={paymentOptions}
          onChangeSelector={setSelectedPayment}
          checkedSelector={selectedPayment}
        />
        <Input
          label={notesLabel}
          placeholder={notesPlaceholder}
          multiline
          value={orderNotes}
          onChange={event => handleOrderNotesChange(event)}
          height="218px"
        />
     
    </fieldset>
  );
};

export default DeliveryForm;
