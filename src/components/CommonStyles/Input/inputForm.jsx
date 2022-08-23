import React from 'react';
import Input from './input'
export const InputForm = (props) => {
  const { field, form, label, icon, style, isTouched, errorMsg, ...restProps } = props;
  const { name } = field || {};
  const { errors, touched } = form || {};
  const isErrors = (isTouched && errorMsg) || (errors?.[name] && touched?.[name]);
  const errorMessage = errorMsg || errors?.[name];
  return (
    <Input value={form.value}/>
  );
};
