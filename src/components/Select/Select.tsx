import React, { forwardRef, SelectHTMLAttributes } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import styles from './Select.module.scss';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  width?: string;
  height?: string;
  className?: string;
  label?: string;
  options: { value: string; label: string }[];
  id?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ width, height, className, label, options, id, ...rest }, ref) => {
    const selectClass = `${className || ''} ${styles.select}`;

    return (
      <div className={styles.selectContainer}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          style={{ width: width, height: height }}
          {...rest}
          className={selectClass}
          aria-label={label || ''}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <MdKeyboardArrowDown className={styles.selectCustomArrow} />
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
