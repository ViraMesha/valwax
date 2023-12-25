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
}

interface ConfigurationParamsCandleI {
  container: ParamCandleI,
  wax: ParamCandleI,
  aroma: ParamCandleI,
  wick: ParamCandleI,
  color: { name: string, color:  null | string,
  },
}

interface ParamsCandleContextI {
  configurationParamsCandle: ConfigurationParamsCandleI;
  toggleParamCandle: (p: string, n: string, i: StaticImageData | null, c: string | null) => void;
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