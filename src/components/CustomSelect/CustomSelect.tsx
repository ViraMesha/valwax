import React from 'react';
import Select from 'react-select';

interface CustomSelectProps {
  value: any;
  onChange: (newValue: any) => void;
  label?: string;
  options: {ref?: string; value?: string; label?: string }[];
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
  name
}) => {
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
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: 'none',
    }),
    Svg: (styles: any) => ({
      ...styles,
      fill: 'var(--cl-primary-900)',
    }),
    indicatorContainer: (styles: any) => ({
      ...styles,
      color: 'var(--cl-primary-900)',
    }),
    option: (styles: any, { isDisabled }: { isDisabled: boolean }) => ({
      ...styles,
      backgroundColor: 'var(--cl-white)',
      cursor: 'pointer',
      borderRadius: '20px',
    }),
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={colourStyles}
        onMenuOpen={onMenuOpen}
        isLoading={isLoading}
      />
    </div>
  );
};

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
