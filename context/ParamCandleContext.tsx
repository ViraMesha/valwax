'use client';

import { StaticImageData } from 'next/image';
import { createContext, useContext, useState } from 'react';

const ParamsCandleContext = createContext<ParamsCandleContextI | undefined>(
  undefined
);

export const ParamsCandleProvider = ({
  children,
}: ParamsCandleContextProps) => {
  const initConfigurationParamsCandle = {
    container: { name: '', image: null },
    wax: { name: '', image: null },
    aroma: { name: '', image: null },
    wick: { name: '', image: null },
    color: { name: '', color: 'inherit' },
  };

  const [configurationParamsCandle, setConfigurationParamsCandle] =
    useState<ConfigurationParamsCandleI>(initConfigurationParamsCandle);

  const toggleParamCandle = (
    param: string,
    name: string,
    image: StaticImageData | null,
    color: string | null,
  ) => {
    setConfigurationParamsCandle(prevConfigurationParamCandle => {
      const updatedParamCandle = color ? { name, color } : { name, image };
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
    <ParamsCandleContext.Provider
      value={{
        configurationParamsCandle,
        toggleParamCandle,
        cleanParamsCandle,
      }}
    >
      {children}
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
