import React, { useState } from 'react'
//Formik
import { Form, Formik } from 'formik';
import FormikControl from './FormControl';
import FormMessage from './FormComponents/FormMessage';
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
  photo: Yup.string().notRequired()
});

const onSubmit = (values, {resetForm}) => {
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 5000);
  console.log("The submitted data are:  ", values);
  resetForm();
};

  return (
      <Formik
        InitialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {() => (
          <Form>
            <FormikControl control='input' type='text' label='Title post:' name='title' placeholder="Title post" />
            <FormikControl control='textarea' rows="4" label='Post description:' name='body' placeholder="Post"/>
            <FormikControl control='input' type='text' label='Your name:' name='author' placeholder="Your name"/>
            <FormikControl control='input' type='text' label='Your avatar (URL):' name='photo' placeholder="Your avatar"/>
            <section >
              <button type="submit">Wyślij</button>
            </section>
            { showMessage && <FormMessage message="Thank you for filling up the form!"/>}
          </Form>
        )}

      </Formik>


  )
}

export default PostNew
