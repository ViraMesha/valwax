'use client';

import { useCallback, useEffect, useState } from 'react';
import CustomSelect from '@components/components/CustomSelect/CustomSelect';
import Input from '@components/components/Input/Input';
import {
  AreaData,
  CheckoutFormValues,
  DeliveryFormProps,
  SelectOptions,
} from '@components/types';
import debounce from 'lodash/debounce';

import {
  fetchAreas,
  fetchAreasUkr,
  fetchCities,
  fetchCitiesUkr,
  fetchWarehouses,
  fetchWarehousesUkr,
} from '../api';
import RadioButtons from '../RadioButtons/RadioButtons';

import styles from './DeliveryForm.module.scss';

const DeliveryForm: React.FC<DeliveryFormProps> = ({ dict, formControl }) => {
  const { setValue } = formControl;

  const {
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
  } = dict;

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

  const handleSelectPayment = (value: string) => {
    setValue('payment', value);
    setSelectedPayment(value);
  };

  const handleSelectArea = (value: SelectOptions) => {
    setCities([]);
    setWarehouse([]);
    setSelectedCity(null);
    setSelectedWarehouse(null);
    setValue('deliveryArea', value);
    setSelectedAreas(value);
  };

  const handleSelectCity = debounce(async (value: SelectOptions) => {
    setSelectedWarehouse(null);
    setWarehouse([]);
    setValue('deliveryCity', value);
    setSelectedCity(value);
  }, 300);

  const handleSelectWarehouse = (value: SelectOptions) => {
    setSelectedWarehouse(null);
    setWarehouse([]);
    setValue('postOfficeBranchNum', value);
    setSelectedWarehouse(value);
  };

  const handleOrderNotesChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setOrderNotes(newValue);
    setValue('notes', newValue);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const areasData = await (selectedDelivery === deliveryOptions[2]
      ? fetchAreasUkr()
      : fetchAreas());
    setIsLoading(false);

    if (areasData) {
      setAreas(areasData);
      setIsAreaSelectOpen(false);
    }
  }, [selectedDelivery, deliveryOptions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDataCity = async () => {
    if (selectedAreas && !selectedCity && cities.length === 0) {
      setIsLoading(true);
      const citiesData = await (selectedDelivery === deliveryOptions[2]
        ? fetchCitiesUkr(selectedAreas.ref)
        : fetchCities(selectedAreas.ref));
      setIsLoading(false);

      if (citiesData) {
        setCities(citiesData);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDataWarehouse = async () => {
    if (selectedAreas && selectedCity && selectedDelivery) {
      setIsLoading(true);
      setWarehouse([]);

      const warehouseData = await (selectedDelivery === deliveryOptions[2]
        ? fetchWarehousesUkr(selectedCity.ref)
        : fetchWarehouses(selectedDelivery, selectedCity.value));

      if (warehouseData) {
        setIsLoading(false);
        setWarehouse(warehouseData);
      }
    }
  };

  useEffect(() => {
    fetchData();
    setValue('payment', selectedPayment);
  }, [fetchData]);

  useEffect(() => {
    if (selectedAreas && !selectedCity && cities.length === 0) {
      fetchDataCity();
    }

    fetchDataWarehouse();
  }, [cities, isAreaSelectOpen, selectedAreas, selectedCity, selectedDelivery]);

  useEffect(() => {
    if (
      (selectedDelivery === deliveryOptions[2] && areas.length === 25) ||
      (selectedDelivery !== deliveryOptions[2] && areas.length === 26)
    ) {
      fetchData();
      setSelectedAreas(null);
      setAreas([]);
      setSelectedCity(null);
      setCities([]);
    }
    setSelectedWarehouse(null);
    setWarehouse([]);
  }, [areas.length, deliveryOptions, fetchData, selectedDelivery]);

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
        onChangeSelector={handleSelectPayment}
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
