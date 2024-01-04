'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import Typography from '@components/components/Typography/Typography';
import  type { handelParamChangeArguments, ParameterI } from '@components/types';
import { useParamsCandleActionContext } from '@context/ParamCandleContext';

import styles from './Parameter.module.scss';

const Parameter: React.FC<ParameterI> = ({
  dict,
  currentParam,
  onChangeParam,
  parameter,
  shouldHaveNumber = true,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { toggleParamCandle } = useParamsCandleActionContext();

  const handelParamChange = ({
    event,
    image,
    color,
    index,
  }: handelParamChangeArguments) => {
    const updateParamObject = {
      param: parameter,
      nameOption: event.target.value,
      imageOption: image,
      colorOption: color,
      indexOption: index,
    };
    toggleParamCandle(updateParamObject);
    onChangeParam(parameter, index);
  };

  return (
    <li className={styles.item}>
      <input
        id={parameter}
        type="checkbox"
        className={`${styles.visuallyHidden} ${styles.slider}`}
      />
      <label className={styles.wrapper} htmlFor={parameter}>
        {shouldHaveNumber ? (
          <Typography
            variant="subheadingMobile"
            color="var(--cl-primary-800)"
            className={styles.number}
          >
            {dict.number}
          </Typography>
        ) : null}
        <Typography
          variant="subheadingMobile"
          color="var(--cl-primary-900)"
          className={styles.title}
        >
          {dict.title}
        </Typography>
        {typeof currentParam === 'number' && (
          <Typography
            variant="subheadingMobile"
            color="var(--cl-primary-500)"
            className={styles.txt}
          >
            {dict.options[currentParam]}
          </Typography>
        )}
        <IoIosArrowUp className={`${styles.icon} ${styles.iconUp}`} />
        <IoIosArrowDown className={`${styles.icon} ${styles.iconDown}`} />
      </label>
      <div className={styles.wrapperList}>
        <CustomScrollBar root={scrollContainerRef} primary="primary-24">
          <ul className={styles.list}>
            {dict.options.map((option, index) => (
              <li key={option} className={styles.itemParam}>
                <label className={styles.checkbox} htmlFor={option}>
                  <input
                    type="radio"
                    name={dict.title}
                    className={`${styles.visuallyHidden} ${styles.input}`}
                    value={option}
                    onChange={e =>
                      handelParamChange({
                        event: e,
                        image: dict.images ? dict.images[index] : null,
                        color: dict.colors ? dict.colors[index] : null,
                        index,
                      })
                    }
                    id={option}
                  />
                  {dict.images && (
                    <Image
                      src={dict.images[index]}
                      alt={option}
                      className={styles.image}
                    />
                  )}
                  {dict.colors && (
                    <div
                      style={{ backgroundColor: dict.colors[index] }}
                      className={styles.box}
                      title={dict.colors[index]}
                    ></div>
                  )}
                  {dict.number !== '1.' && (
                    <Typography
                      variant="bodyRegular"
                      className={styles.typography}
                      color="--cl-gray-200"
                    >
                      {option}
                    </Typography>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </CustomScrollBar>
      </div>
    </li>
  );
};

export default Parameter;
