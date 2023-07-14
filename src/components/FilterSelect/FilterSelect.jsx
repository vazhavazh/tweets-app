import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    flex: 1,
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
    alignSelf: 'center',
    fontWeight: 500,
    outline: 'none',
    boxSizing: 'border-box',
    minWidth: '240px',
    maxWidth: '240px',
    padding: '14px 28px',
    borderRadius: '10.311px',
    backgroundColor: '#5cd3a8',
    boxShadow:
      '0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)',
    borderColor: 'transparent',
    textAlign: 'center',
    color: '#436069',
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    textTransform: 'uppercase',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ebd8ff' : '#5cd3a8',
    color: state.isSelected ? '#000000' : '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
  }),
};

const FilterSelect = ({ value, onChange, options }) => {
  const handleChange = selectedOption => {
    onChange(selectedOption.value);
  };

  return (
    <Select
      value={options.find(option => option.value === value)}
      onChange={handleChange}
      options={options}
      styles={customStyles}
    />
  );
};

export default FilterSelect;
