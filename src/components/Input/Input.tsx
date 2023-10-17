import React, { ComponentProps, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form/dist/types';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  className?: string;
  placeholder?: ComponentProps<'input'>['placeholder'];
  name?: ComponentProps<'input'>['name'];
  onChange?: ComponentProps<'input'>['onChange'];
  onBlur?: ComponentProps<'input'>['onBlur'];
  disabled?: ComponentProps<'input'>['disabled'];
  type?: ComponentProps<'input'>['type'];
  label?: string;
  error?: FieldError | undefined;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, height, className, label, error, errorMessage, ...rest }, ref) => {
    const inputClass = `${className || ''} ${styles.input} ${
      error ? styles.errorInput : ''
    }`;

    return (
      <>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          style={{ width: width, height: height }}
          {...rest}
          className={inputClass}
          aria-label={rest.placeholder || ''}
        />
        {error && <p className={styles.error}>{errorMessage}</p>}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
