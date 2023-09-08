import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ width, height, className, ...rest }) => {
  const inputClass = `${className || ''} ${styles.input}`;
 
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
