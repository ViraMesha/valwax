import { StaticImageData } from 'next/image';
import { UseFormReturn } from 'react-hook-form';

import { Locale } from '../../i18n-config';

export interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  name: string;
  price: number;
  aroma: string[];
  components: ComponentI[];
  description: string;
  slug: string;
  volume: string;
}

export interface ComponentI {
  title: string;
  content: string;
}

export interface IAroma {
  name: string;
  topNotes: string[];
  baseNotes: string[];
}

export interface CandleDetailsI {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  slug: string;
  name: string;
  aroma: IAroma;
  volume: string;
}

export type CustomCandleDescription = {
  container: string;
  wax: string;
  aroma: string;
  wick: string;
  color: string;
};

export interface CartProductI {
  id: string;
  img: string;
  title: string;
  description?: string | CustomCandleDescription;
  price: number;
  quantity: number;
  link: string;
}

type parameterI = {
  number: string;
  title: string;
  options: string[];
  images?: StaticImageData[];
  colors?: string[];
};

export type configuratorSectionI = {
  container: parameterI;
  wax: parameterI;
  aroma: parameterI;
  wick: parameterI;
  color: parameterI;
};

export type generalI = {
  buttons: { [key: string]: string };
  titles: { [key: string]: string };
  messages: { [key: string]: string };
};

export interface ConfiguratorSectionI {
  dict: configuratorSectionI;
  dictGeneral: generalI;
}

export interface ParameterI {
  dict: parameterI;
  onChangeParam: (v: string, p: string) => void;
  parameter: string;
}

export interface OptionEventI {
  target: { value: string };
}

export interface ProductDetails {
  id: string;
  images: string[];
  title: string;
  price: number;
  slug: string;
}

export interface AreaData {
  Ref?: string;
  Description?: string;
  REGION_ID?: string;
  REGION_UA?: string;
  CITY_ID?: string;
  CITY_UA?: string;
  POSTOFFICE_ID?: string;
  POSTOFFICE_UA?: string;
}

export interface SelectOptions {
  ref: string;
  value: string;
  label: string;
}

export interface CityData {
  Area: string;
  AreaDescription: string;
  Description: string;
  CityID: string;
  Ref: string;
}
export interface ButtonsDictI {
  buyNow: string;
  addToCart: string;
}

export interface ProductDescription {
  wax: string;
  aroma: string;
  wick: string;
  color: string;
}

export interface CheckoutFormValidation {
  firstNameReq: string;
  lastNameReq: string;
  emailReq: string;
  validEmail: string;
  phoneReq: string;
  validPhone: string;
  deliveryReq: string;
  deliveryAreaReq: string;
  deliveryCityReq: string;
  postOfficeBranchNumReq: string;
  paymentReq: string;
  notesReq: string;
}

export interface CheckoutPageDictionary {
  productList: {
    deleteButtonText: string;
    totalText: string;
    descriptionPropertyNames: ProductDescription;
  };
  form: {
    contactFormTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
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
    buttonText: string;
    errorMessages: CheckoutFormValidation;
  };
}

export interface ProductListDictionary {
  deleteButtonText: string;
  totalText: string;
  descriptionPropertyNames: ProductDescription;
}

export interface NavDictI {
  home: string;
  candles: string;
  soy: string;
  coconut: string;
  palm: string;
  createYourOwn: string;
  paymentAndDelivery: string;
  boxes: string;
}
export interface BoxI {
  id: string;
  img: string[];
  title: string;
  price: number;
  link: string;
  text: string;
  description: string;
}

type FilterT = {
  title: string;
  subtitle: string;
  up: string;
  down: string;
  cleanUp: string;
  result: string;
  category: { [key: string]: { title: string; option: string[] } };
};

export interface FilterI {
  dict: FilterT;
  className?: string;
  closeModal?: () => void;
}

export interface CandleApiResponse {
  candles: CandleDetailsI[];
  totalPages: number;
}

export interface CandlesSectionI {
  dict: {
    filter: FilterT;
  };
  candles: Promise<CandleApiResponse>;
}

export interface FilterTagsI {
  dict: {
    cleanFilter: string;
  };
}

export interface TabsI {
  dict: {
    tabs: {
      fullTitle: string[];
      abbreviatedTitle: string[];
    };
    filter: {
      title: string;
      subtitle: string;
      up: string;
      down: string;
      cleanUp: string;
      result: string;
      category: any;
      cleanFilter: string;
    };
  };
  lang: Locale;
}

export interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  delivery: string;
  deliveryArea: {
    ref?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
  };
  deliveryCity: {
    ref?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
  };
  postOfficeBranchNum: {
    ref?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
  };
  payment: string;
  notes?: string | undefined;
}

export interface CheckoutFormProps {
  dict: {
    contactFormTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    buttonText: string;
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
    errorMessages: CheckoutFormValidation;
  };
}

export interface DeliveryFormProps {
  dict: {
    contactFormTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    buttonText: string;
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
  };
  formControl: UseFormReturn<CheckoutFormValues>;
}

export interface ButtonsTranslation {
  buyBtn: string;
  reviewBtn: string;
}

export interface BoxesSectionProps {
  dict: ButtonsTranslation;
  boxes: Promise<BoxI[]>;
  toastMessage: string;
}

export interface UseScrollbarProps {
  root: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
  maxHeight?: string;
  primary?: string;
}

export type ServerLocale = 'UA' | 'EN';
