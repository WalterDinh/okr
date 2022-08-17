import React from 'react';

const Input = (props) => {
  const { field, form, label, icon,  } = props;
  const { name } = field;
  const { errors, touched } = form;

  const isErrors = errors[name] && touched[name];
  const errorMessage = errors[name];

  return (
    <>
      {label && <div className="label">{label}</div>}
      <div className="search-box">
        {icon && <div className="icon">{props?.icon}</div>}
        {icon ? (
          <input className="input" style={props?.style} {...props} {...field}/>
        ) : (
          <input className="input2" style={props?.style} {...props} {...field}/>
        )}
      </div>
        {isErrors && <div className="error">{errorMessage}</div>}
    </>
  );
};

export default Input;
