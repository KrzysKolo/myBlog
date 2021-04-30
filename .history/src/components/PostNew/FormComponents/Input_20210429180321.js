import React from 'react';
import{ Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = ({field, props}) => {
    const { label, name, ...rest } = props;
    return (

        <section className="form-control section">
             <label htmlFor={name}>{label}</label>
            <Field  id={name} name={name} {...rest} {...field} />
            <ErrorMessage name={name} component={TextError} />
        </section>
     );
}

export default Input;