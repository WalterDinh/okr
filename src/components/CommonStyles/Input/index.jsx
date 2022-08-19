import React from 'react';

const Input = (props) => {
  const { field, form, label, icon, placeholder, style, type } = props;
  const { name } = field;
  const { errors, touched } = form;

  const isErrors = errors[name] && touched[name];
  const errorMessage = errors[name];

  return (
    <>
      {label && <div className="label">{label}</div>}
      <div className="search-box" style={style}>
        {icon && <div className="icon">{icon}</div>}
        <input className={icon ? 'input' : 'input2'} type={type} placeholder={placeholder} {...field} />
      </div>
      {isErrors && <div className="error">{errorMessage}</div>}
    </>
  );
};

export default Input;
