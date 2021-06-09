import React from 'react';

function TextAreaComponent(props) {
const {label, value, setValue, required, placeholder} = props;

const handleChange = (e) => {
    if (e.target.value !== ' ') {
      setValue(e.target.value);
    }
  };

  return (
    <div className="input">
      <label className="input__label" htmlFor={label}>
        {label}
      </label>
      <textarea
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default TextAreaComponent;
