import React, { useState } from 'react';
//import {useFormik} from 'formik';
//Formik
import { Form, Formik } from 'formik';
//import FormikControl from './FormControl';
//import FormMessage from './FormComponents/FormMessage';
import * as Yup from 'yup';

/* const CustomTextInput = ({ label, ...props}) => {
  const [field, meta] =useField(props);
  return(
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className="text-input" {...field} {...props} />
    { meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null }
    </>
  )
};
 */

const PostNew = () => {

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  /* const [ showMessage, setShowMessage ] = useState(false);
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
  photo: Yup.string()
});

const onSubmit = (values, {setSubmitting, resetForm}) => {
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 5000);
  console.log("The submitted data are:  ", values);
  resetForm();
  setSubmitting(false);
};

  return (
      <Formik
        InitialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        { props => (
          <Form>
          <h1> Add post </h1>
          <CustomTextInput label="Title post" name="title" type="text" placeholder="Enter title post" />
          <CustomTextInput as textarea label="Post description" name="body" type="text" placeholder="Post description" />
          <CustomTextInput label="Author name" name="author" type="text" placeholder="Author name" />
          <CustomTextInput label="Avatar" name="photo" type="text" placeholder="Avatar" />
{/*
            <FormikControl control='input' type='text' label='Title post:' name='title' placeholder="Title post" />
            <FormikControl control='textarea' rows="4" label='Post description:' name='body' placeholder="Post"/>
            <FormikControl control='input' type='text' label='Your name:' name='author' placeholder="Your name"/>
            <FormikControl control='input' type='text' label='Your avatar (URL):' name='photo' placeholder="Your avatar"/>
          }   <section >
              <button type="submit">Wyślij</button>
            </section>
            { showMessage && <FormMessage message="Thank you for filling up the form!"/>}
          </Form>
        )}

      </Formik>
  ) */
}

export default PostNew
