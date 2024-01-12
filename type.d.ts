type ServerLocale = 'UA' | 'EN';

interface IProductDescriptionDict {
  price: string;
  quantity: string;
  topNotes: string;
  baseNotes: string;
  volume: string;
  containerVolume: string;
  matchsticks: string;
  wick: string;
  wax: string;
  color: string;
  aroma: string;
  aromaToChoose: string;
  volumeLabel: string;
}

interface ApiRequest {
  id: string;
  currentLang: 'UA' | 'EN';
}

interface IFilterItem {
  name: string;
  values: string[];
}

//=================================================
//    Context
//=================================================

//  ParamsCandleContext

interface ParamCandleI {
  nameOption: string;
  imageOption: StaticImageData | null;
  indexOption: number | null;
}

interface ConfigurationParamsCandleI {
  container: ParamCandleI;
  wax: ParamCandleI;
  aroma: ParamCandleI;
  wick: ParamCandleI;
  color: { nameOption: string; colorOption: null | string; indexOption: null | number };
}

interface ParamsCandleContextI {
  configurationParamsCandle: ConfigurationParamsCandleI;
}

interface toggleParamCandleArguments {
  param: string;
  nameOption: string;
  imageOption: StaticImageData | null;
  colorOption: string | null;
  indexOption: number;
}

interface ParamsCandleActionContextI {
  toggleParamCandle: (args: toggleParamCandleArguments) => void;
  cleanParamsCandle: () => void;
}

interface ParamsCandleContextProps {
  children: React.ReactNode;
}
