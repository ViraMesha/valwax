'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ConfigurationFilterI = {
  sortSettings: string;
  filterParam: string[];
};

type FilterContextI = {
  configurationFilter: ConfigurationFilterI;
  modifyFilter: (p: string) => void;
  modifySort: (p: string) => void;
  cleanFilter: () => void;
  isSelected: (i: string) => boolean;
};

type FilterContextProps = {
  children: React.ReactNode;
};

const FilterContext = createContext<FilterContextI | undefined>(undefined);

export const FilterProvider = ({ children }: FilterContextProps) => {
  const initConfigurationFilter = { sortSettings: '', filterParam: [] };

  const [configurationFilter, setConfigurationFilter] =
    useState<ConfigurationFilterI>(initConfigurationFilter);

  const modifyFilter = (param: string) => {
    setConfigurationFilter(prevConfigurationFilter => {
      if (prevConfigurationFilter.filterParam.includes(param)) {
        return {
          ...prevConfigurationFilter,
          filterParam: prevConfigurationFilter.filterParam.filter(
            par => par !== param
          ),
        };
      } else {
        return {
          ...prevConfigurationFilter,
          filterParam: [...prevConfigurationFilter.filterParam, param],
        };
      }
    });
  };

  const modifySort = (set: string) => {
    setConfigurationFilter(prevConfigurationFilter => {
      if (prevConfigurationFilter.sortSettings === set) {
        return {
          ...prevConfigurationFilter,
          sortSettings: '',
        };
      } else {
        return {
          ...prevConfigurationFilter,
          sortSettings: set,
        };
      }
    });
  };

  const cleanFilter = () => {
    setConfigurationFilter(initConfigurationFilter);
  };

  const isSelected = (item: string): boolean => {
    return configurationFilter.filterParam.includes(item) ? true : false;
  };

  useEffect(() => {
    console.log('Updated filterVar', configurationFilter);
  }, [configurationFilter]);

  return (
    <FilterContext.Provider
      value={{
        configurationFilter,
        modifyFilter,
        modifySort,
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
