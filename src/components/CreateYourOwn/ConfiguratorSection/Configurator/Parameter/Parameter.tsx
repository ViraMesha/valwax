'use client'

import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Typography from '@components/components/Typography/Typography';
import { OptionEventI, ParameterI } from '@components/types';

import styles from './Parameter.module.scss';


const Parameter: React.FC<ParameterI> = ({ dict }) => {

  const [param, setParam] = useState('');

  const handelParamChange = (event: OptionEventI) => {
    setParam(event.target.value);
  }

  return (
    <label htmlFor={dict.title} className={styles.item}>
      <input
        id={dict.title}
        type="checkbox"
        className={`${styles.visuallyHidden} ${styles.slider}`}
      />
      <div className={styles.wrapper}>
        <Typography variant="subheadingMobile" color="var(--cl-primary-800)">
          {dict.number}
        </Typography>
        <Typography variant="subheadingMobile" color="var(--cl-primary-900)">
          {dict.title}
        </Typography>
        <Typography variant="subheadingMobile" color="var(--cl-primary-500)" className={styles.txt}>
          {param}
        </Typography>
        <IoIosArrowUp className={`${styles.icon} ${styles.iconUp}`} />
        <IoIosArrowDown className={`${styles.icon} ${styles.iconDown}`} />
      </div>
      <ul className={styles.list}>
        {dict.options.map((option, index) => (
          <li key={option} className={styles.itemParam}>
            <label className={styles.checkbox} htmlFor={option}>
              <input
                type="radio"
                name={dict.title}
                className={`${styles.visuallyHidden} ${styles.input}`}
                value={option}
                onChange={handelParamChange}
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
              {dict.number  !== '1.'  && <Typography
                variant="bodyRegular"
                className={styles.typography}
                color="--cl-gray-200"
              >
                {option}
              </Typography>}
            </label>
          </li>
        ))}
      </ul>
    </label>
  );
};

export default Parameter;
