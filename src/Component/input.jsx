import React from "react";

export default function Input({
  type,
  placeholder,
  currencyOptions = [],
  className,
  set,
  fromTo
}) {
  const handleChange = (e) => {
    set(e.target.value);
  };

  return (
    <div>
      <label htmlFor={type} className='block text-white mb-2'>
        {type}
      </label>
      <select
        name={type}
        className={className}
        onChange={handleChange}
        value={fromTo} 
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
