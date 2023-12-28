'use client';

import Image from 'next/image';
import { useParamsCandleContext } from '@context/ParamCandleContext';
import notSelectedImage from '@images/create-your-own/question-mark.jpg';

import styles from './Annotation.module.scss';

interface AnnotationI {
  param: 'container' | 'wax' | 'aroma' | 'wick' | 'color';
  top: string;
  left: string;
}

const Annotation: React.FC<AnnotationI> = ({ param, top, left }) => {
  const { configurationParamsCandle } = useParamsCandleContext();

  const isParamColor = param === 'color';
  const srcImage = isParamColor || configurationParamsCandle[param]?.image === null ? notSelectedImage : configurationParamsCandle[param]?.image;
  const selectedColor = isParamColor ? configurationParamsCandle.color.color : 'red'

  return (
    <div className={styles.param} style={{ top: top, left: left }}>
      {isParamColor && configurationParamsCandle.color.color !== 'inherit' ? (
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
