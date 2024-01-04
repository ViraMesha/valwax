'use client';
import { useState } from 'react';
import { CustomCandleDescription } from '@components/types';

import { useInitParamCandle } from './useInitParamCandle';

export const useCandleParam = () => {
  const [paramCandle, setParamCandle] = useState<CustomCandleDescription>(
    useInitParamCandle()
  );

  const handleChangeCandleParam = (key: string, param: number) => {
    setParamCandle({ ...paramCandle, [key]: param });
  };

  return {
    paramCandle,
    handleChangeCandleParam,
  };
};
