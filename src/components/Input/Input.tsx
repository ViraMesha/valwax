import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({ width, height, ...rest }) => {
  const inputClass = `${styles.input}`;

  return (
    <input
      style={{ width: width, height: height }}
      {...rest}
      className={inputClass}
      aria-label={rest.placeholder || ''}
    />
  );
};

Input.displayName = 'Input';

export default Input;
