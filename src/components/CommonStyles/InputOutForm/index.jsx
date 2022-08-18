import React from 'react';

const InputOutForm = (props) => {
  const { icon, placeholder, style, type, name, onChange, value } = props;
  return (
    <>
      <div className="search-box" style={style}>
        {icon && <div className="icon">{icon}</div>}
        <input
          name={name}
          className={icon ? 'input' : 'input2'}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};

export default InputOutForm;
