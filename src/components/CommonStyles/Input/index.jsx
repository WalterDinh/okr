import React from 'react';
const Input = (props) => {
  const { field, form, label, icon, style, isTouched, errorMsg, ...restProps } = props;
  const { name } = field || {};
  const { errors, touched } = form || {};
  const isErrors = (isTouched && errorMsg) || (errors?.[name] && touched?.[name]);
  const errorMessage = errorMsg || errors?.[name];
  return (
    <>
      {label && <div className="label">{label}</div>}
      <div className="input-box" style={style}>
        {icon && <div className="icon">{icon}</div>}
        <input className={icon ? 'input' : 'input2'} {...(field || {})} {...restProps} />
      </div>
      {isErrors && <div className="error">{errorMessage}</div>}
    </>
  );
};
export default Input;
