'use client';

import { StaticImageData } from 'next/image';
import { createContext, useContext, useState } from 'react';

const ParamsCandleContext = createContext<ParamsCandleContextI | undefined>(
  undefined
);

const ParamsCandleActionContext = createContext<
  ParamsCandleActionContextI | undefined
>(undefined);

export const ParamsCandleProvider = ({
  children,
}: ParamsCandleContextProps) => {
  const initConfigurationParamsCandle = {
    container: { name: '', image: null, index: null },
    wax: { name: '', image: null, index: null },
    aroma: { name: '', image: null, index: null },
    wick: { name: '', image: null, index: null },
    color: { name: '', color: 'inherit', index: null },
  };

  const [configurationParamsCandle, setConfigurationParamsCandle] =
    useState<ConfigurationParamsCandleI>(initConfigurationParamsCandle);

  const toggleParamCandle = ({
    param,
    nameOption,
    imageOption,
    colorOption,
    indexOption,
  }: toggleParamCandleArguments) => {
    setConfigurationParamsCandle(prevConfigurationParamCandle => {
      const updatedParamCandle = colorOption
        ? { nameOption, colorOption, indexOption }
        : { nameOption, imageOption, indexOption };
      return {
        ...prevConfigurationParamCandle,
        [param]: updatedParamCandle,
      };
    });
  };

  const cleanParamsCandle = () => {
    setConfigurationParamsCandle(initConfigurationParamsCandle);
  };

  return (
    <ParamsCandleContext.Provider value={{ configurationParamsCandle }}>
      <ParamsCandleActionContext.Provider
        value={{
          toggleParamCandle,
          cleanParamsCandle,
        }}
      >
        {children}
      </ParamsCandleActionContext.Provider>
    </ParamsCandleContext.Provider>
  );
};

export const useParamsCandleContext = () => {
  const context = useContext(ParamsCandleContext);
  if (!context)
    throw new Error(
      'useParamsCandleContext must be used within a ParamsCandleProvider'
    );
  return context;
};

export const useParamsCandleActionContext = () => {
  const context = useContext(ParamsCandleActionContext);
  if (!context)
    throw new Error(
      'useParamsCandleActionContext must be used within a ParamsCandleActionProvider'
    );
  return context;
};
