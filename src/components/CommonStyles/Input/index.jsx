import React from 'react';

const Input = (props) => {
  const { field, form, label, icon, isoutform, onChange, placeholder, style, type, name } = props;
  if (isoutform === 'true') {
    return (
      <>
        {label && <div className="label">{label}</div>}
        <div className="search-box" style={props?.style}>
          {icon && <div className="icon">{props?.icon}</div>}
          {icon ? (
            <input name={name} className="input" type={type} placeholder={placeholder} onChange={onChange} />
          ) : (
            <input name={name} className="input2" type={type} placeholder={placeholder} onChange={onChange} />
          )}
        </div>
      </>
    );
  } else {
    const { name } = field;
    const { errors, touched } = form;

    const isErrors = errors[name] && touched[name];
    const errorMessage = errors[name];

    return (
      <>
        {label && <div className="label">{label}</div>}
        <div className="search-box" style={style}>
          {icon && <div className="icon">{icon}</div>}
          {icon ? (
            <input className="input" type={type} placeholder={placeholder}  {...field} />
          ) : (
            <input className="input2" type={type} placeholder={placeholder} {...field} />
          )}
        </div>

        {isErrors && <div className="error">{errorMessage}</div>}
      </>
    );
  }
};

export default Input;
