import React, { useState } from 'react'
//Formik
import { Form, formik } from 'formik';
import FormikControl from './FormControl';
import * as Yup from 'yup';

const PostNew = () => {
  const [ showMessage, setShowMessage ] = useState(false);
  const InitialValues = {
    title: '',
    body: '',
    author: '',
    photo: '',
  }

const validationSchema = () => Yup.object({
  title: Yup.string().required("The title of the post is required").min(2, "Title must be at least 2 characters long").max(30,"The title may contain max 30 characters"),
  body: Yup.string().required("Message is required").min(2, "The message must contain at least 2 characters").max(250, "The message may contain max 250 characters"),
  author: Yup.string().required("Your signature is required").min(2, "The signature must contain at least 2 characters").max(30, "The signature may contain max 30 characters"),
  photo: Yup.string().notRequired();
});

const onSubmit = (values, {resetForm}) => {
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 5000);
  console.log("The submitted data are:  ", values);
  resetForm();
};

  return (
    <div>
      <h1>Add New Post</h1>
      <Formik
        InitialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {() => (
          <FormikControl control='input' type='text' label='Name:' name='name' placeholder="your name" />
          <FormikControl control='input' type='email' label='Email:' name='email' placeholder="your email"/>
          <FormikControl control='radio' label='Choose the gender: ' name='sex' options={RadioOptions}/>
          <FormikControl control='textarea' rows="4" label='Description:' name='description' placeholder="short bio"/>
        )}

      </Formik>

    </div>
  )
}

export default PostNew
