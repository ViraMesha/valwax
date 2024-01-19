'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useParamsCandleActionContext, useParamsCandleContext } from '@context/ParamCandleContext';
import notSelectedImage from '@images/create-your-own/question-mark.jpg';

import styles from './Annotation.module.scss';

interface AnnotationI {
  param: 'container' | 'wax' | 'aroma' | 'wick' | 'color';
  top: string;
  left: string;
}

const Annotation: React.FC<AnnotationI> = ({ param, top, left }) => {
  const { configurationParamsCandle } = useParamsCandleContext();
  const {  cleanParamsCandle } = useParamsCandleActionContext();

  const isParamColor = param === 'color';
  const srcImage = isParamColor || configurationParamsCandle[param]?.imageOption === null ? notSelectedImage : configurationParamsCandle[param]?.imageOption;
  const selectedColor = isParamColor ? configurationParamsCandle.color.colorOption : 'red'

  useEffect(() => {
    cleanParamsCandle()
  }, [])

  return (
    <div className={styles.param} style={{ top: top, left: left }}>
      {isParamColor && configurationParamsCandle.color.colorOption !== 'inherit' ? (
        <div className={styles.paramImage} style={{ backgroundColor: selectedColor === null ? 'red' :  selectedColor}}>
        </div>
      ) : (
        <Image
          src={srcImage}
          alt={`Зображення обраного параметру ${param}`}
          className={styles.paramImage}
        />
      )}
    </div>
  );
};

export default Annotation;
