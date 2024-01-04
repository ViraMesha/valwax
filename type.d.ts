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



//=================================================
//    Context 
//=================================================

//  ParamsCandleContext

interface ParamCandleI {
  name: string,
  image: StaticImageData | null,
  index: number | null,
}

interface ConfigurationParamsCandleI {
  container: ParamCandleI,
  wax: ParamCandleI,
  aroma: ParamCandleI,
  wick: ParamCandleI,
  color: { name: string, color:  null | string, index: null | number,
  },
}

interface ParamsCandleContextI {
  configurationParamsCandle: ConfigurationParamsCandleI;
}

interface toggleParamCandleArguments {
  param: string,
  nameOption: string,
  imageOption: StaticImageData | null,
  colorOption: string | null,
  indexOption: number
}

interface ParamsCandleActionContextI {
  toggleParamCandle: (args: toggleParamCandleArguments) => void;
  cleanParamsCandle: () => void;
}

interface ParamsCandleContextProps {
  children: React.ReactNode;
}

//  FilterContext

interface ConfigurationFilterI {
  sortSetting: string;
  filterParams: string[];
}

interface FilterContextI {
  configurationFilter: ConfigurationFilterI;
  toggleFilterParam: (p: string) => void;
  updateSortSetting: (p: string) => void;
  cleanFilter: () => void;
  isSelected: (i: string) => boolean;
}

interface FilterContextProps {
  children: React.ReactNode;
}