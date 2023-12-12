'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ConfigurationFilterI = {
  sortSetting: string;
  filterParams: string[];
};

type FilterContextI = {
  configurationFilter: ConfigurationFilterI;
  toggleFilterParam: (p: string) => void;
  updateSortSetting: (p: string) => void;
  cleanFilter: () => void;
  isSelected: (i: string) => boolean;
};

type FilterContextProps = {
  children: React.ReactNode;
};

const FilterContext = createContext<FilterContextI | undefined>(undefined);

export const FilterProvider = ({ children }: FilterContextProps) => {
  const initConfigurationFilter = { sortSetting: '', filterParams: [] };

  const [configurationFilter, setConfigurationFilter] =
    useState<ConfigurationFilterI>(initConfigurationFilter);

  const toggleFilterParam = (param: string) => {
    setConfigurationFilter(prevConfigurationFilter => {
      const isParamIncluded =
        prevConfigurationFilter.filterParams.includes(param);
      const updatedFilterParams = isParamIncluded
        ? prevConfigurationFilter.filterParams.filter(par => par !== param)
        : [...prevConfigurationFilter.filterParams, param];
      return {
        ...prevConfigurationFilter,
        filterParams: updatedFilterParams,
      };
    });
  };
  
  const updateSortSetting = (set: string) => {
    setConfigurationFilter(prevConfigurationFilter => ({
      ...prevConfigurationFilter,
      sortSetting: prevConfigurationFilter.sortSetting === set ? '' : set,
    }));
  };

  const cleanFilter = () => {
    setConfigurationFilter(initConfigurationFilter);
  };

  const isSelected = (item: string): boolean => {
    return configurationFilter.filterParams.includes(item) ? true : false;
  };

  return (
    <FilterContext.Provider
      value={{
        configurationFilter,
        toggleFilterParam,
        updateSortSetting,
        cleanFilter,
        isSelected,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error('useFilterContext must be used within a FilterProvider');
  return context;
};
