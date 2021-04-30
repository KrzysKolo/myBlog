import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      { props.variant ?
      <textarea  row="5" width="200px" className={`textarea ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off" /> :
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />}
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}