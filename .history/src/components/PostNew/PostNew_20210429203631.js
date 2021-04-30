import React, { useState } from 'react';
import {useFormik} from 'formik';
//Formik
//import { Form, useField, Formik } from 'formik';
//import FormikControl from './FormControl';
//import FormMessage from './FormComponents/FormMessage';
//import * as Yup from 'yup';

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

  const InitialValues = {
    title: '',
    body: '',
    author: '',
    photo: '',
  }

  const formik = useFormik({
    initialValues: {InitialValues}

   })

  return (
<>
  <input
id = 'title'
typ = 'text'
placeholder = 'Nazwa'
onChange = {formik.handleChange}
value = {formik.values.title}/>

<textarea
id = 'body'
typ = 'text'
placeholder = 'email'
onChange = {formik.handleChange}
value = {formik.values.body} />
<input
id = 'author'
typ = 'text'
placeholder = 'author'
onChange = {formik.handleChange}
value = {formik.values.author} />

<input
id = 'photo'
typ = 'text'
placeholder = 'photo'
onChange = {formik.handleChange}
value = {formik.values.photo} />
</>
  )
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
