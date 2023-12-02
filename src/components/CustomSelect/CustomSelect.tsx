import React, { useRef } from 'react';
import Select from 'react-select';

import CustomScrollBar from '../CustomScrollBar/CustomScrollBar';

import styles from './CustomSelect.module.scss';

interface CustomSelectProps {
  value: any;
  onChange: (newValue: any) => void;
  label?: string;
  options: { ref?: string; value?: string; label?: string }[];
  // id?: string;
  placeholder?: string;
  onClick?: () => void;
  onMenuOpen?: () => void;
  onInputChange?: () => void;
  isLoading?: boolean;
  name?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  label,
  placeholder,
  onMenuOpen,
  isLoading,
  name,
}) => {
  const SelectWrapper = useRef<HTMLDivElement | null>(null);

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '5px 15px',
      fontFamily: 'Proxima Nova',
      fontSize: '16px',
      lineHeight: '150%',
      color: 'var(--cl-gray-200)',
      outline: 'none',
      appearance: 'none',
      borderColor: 'var(--cl-secondary-700)',
      '&:hover': {
        borderColor: 'var(--cl-secondary-700)',
      },
      '&:focus': {
        outline: 'none',
        borderColor: 'var(--cl-secondary-700)',
        boxShadow: 'none',
      },
      transition: 'borderColor var(--animat)',
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: 'none',
    }),
    svg: (styles: any) => ({
      ...styles,
      width: '16',
      height: '16',
      fill: 'var(--cl-primary-900)',
    }),

    option: (styles: any, { isDisabled }: { isDisabled: boolean }) => ({
      ...styles,
      backgroundColor: 'var(--cl-white)',
      cursor: 'pointer',
      borderRadius: '20px',
    }),

    menuPortal: (provided: any) => ({
      ...provided,
      minHeight: '300px', // Задаємо мінімальну висоту випадаючого списку
     
      // Інші властивості, які вам потрібно змінити
    }),
  };

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <CustomScrollBar root={SelectWrapper} maxHeight="240px">
        <Select
          value={value}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          styles={colourStyles}
          onMenuOpen={onMenuOpen}
          isLoading={isLoading}
          menuPortalTarget={document.body}
        />
      </CustomScrollBar>
    </div>
  );
};

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
