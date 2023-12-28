import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Select, { components } from 'react-select';

import CustomScrollBar from '../CustomScrollBar/CustomScrollBar';

import styles from './CustomSelect.module.scss';

interface CustomSelectProps {
  value: any;
  onChange: (newValue: any) => void;
  label?: string;
  options: { ref?: string; value?: string; label?: string }[];
  placeholder?: string;
  onClick?: () => void;
  onMenuOpen?: () => void;
  onInputChange?: () => void;
  isLoading?: boolean;
  name?: string;
  errorMessage?: string;
  error?: any;
}

const CustomSelect = forwardRef<HTMLDivElement, CustomSelectProps>(
  (
    {
      value,
      onChange,
      options,
      label,
      placeholder,
      onMenuOpen,
      isLoading,
      name,
      errorMessage,
      error,
    },
    ref
  ) => {
    const SelectWrapper = useRef<HTMLDivElement | null>(null);
    const [selectedValue, setSelectedValue] = useState(value);

    const colourStyles = {
      control: (styles: any) => ({
        ...styles,
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '5px 15px',
        fontFamily: 'var(--font-mono)',
        fontSize: '16px',
        lineHeight: '150%',
        color: 'var(--cl-gray-200)',
        borderColor: error ? 'var(--cl-error-500)' : 'var(--cl-secondary-700)',
        transition: 'borderColor var(--animat)',
        boxShadow: 'none',
        '&:hover': {
          borderColor: error
            ? 'var(--cl-error-500)'
            : 'var(--cl-secondary-700)',
        },
        '&:focus': {
          borderColor: error
            ? 'var(--cl-error-500)'
            : 'var(--cl-secondary-700)',
        },
      }),
      indicatorSeparator: (styles: any) => ({
        ...styles,
        display: 'none',
      }),
      Svg: (styles: any) => ({
        ...styles,
        width: '16',
        height: '16',
        fill: 'var(--cl-primary-900)',
      }),

      option: (styles: any, { isFocused, isSelected }: any) => ({
        ...styles,
        borderRadius: '8px',
        backgroundColor:
          isSelected || isFocused
            ? 'var(--cl-secondary-50)'
            : 'var(--cl-white)',
        color: 'var(--cl-gray-500)',
      }),
      MenuList: (styles: any) => ({
        ...styles,
        maxHeight: '300px',
        overflowY: 'auto',
      }),
    };

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    const MenuList = (props: any) => {
      return (
        <components.MenuList {...props}>
          <CustomScrollBar root={SelectWrapper} maxHeight="240px">
            {props.children}
          </CustomScrollBar>
        </components.MenuList>
      );
    };

    return (
      <div>
        {label && <label className={styles.label}>{label}</label>}
        <Select
          value={selectedValue}
          onChange={newValue => {
            setSelectedValue(newValue);
            onChange(newValue);
          }}
          options={options}
          placeholder={placeholder}
          styles={colourStyles}
          onMenuOpen={onMenuOpen}
          isLoading={isLoading}
          components={{ MenuList }}
          // menuIsOpen={true}
        />
        {error && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
