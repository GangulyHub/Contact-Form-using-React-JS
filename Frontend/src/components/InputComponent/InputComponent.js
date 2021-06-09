import React from 'react';
import './InputComponent.css';

function InputComponent(props) {
  const {
    label,
    type,
    required,
    placeholder,
    value,
    setValue,
    disabled,
  } = props;
  

  const handleChange = (e) => {
    if (e.target.value !== ' ') {
      setValue(e.target.value);
    }
  };

  return (
    <div className="input">
      <label className="input__label" htmlFor={label} >
        {label}
      </label>
      <input
        className="input__field"
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        disabled={disabled}
      />
    </div>
  );
}

export default InputComponent;
