import React from 'react';
import './PostNew.css';

//Formik
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';

const PostNew = () => {

  const validate = Yup.object({
    title: Yup.string()
      .min(2, "Title must be at least 2 characters long")
      .max(30,"The title may contain max 30 characters")
      .required('Required'),
    body: Yup.string()
      .min(2, "The message must contain at least 2 characters")
      .max(250, "The message may contain max 250 characters")
      .required('Required'),
    author: Yup.string()
      .min(2, "The signature must contain at least 2 characters")
      .max(30, "The signature may contain max 30 characters")
      .required('Email is required'),
    photo: Yup.string()
  });

  return (
    <section className="wrapper">
      <div className="form-preview">
        <Formik
          initialValues={{
            title: '',
            body: '',
            author: '',
            photo: ''
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log(values)
          }}
        >
          {() => (
            <div>
              <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
              <Form>
                <TextField label="Title post" name="title" type="text" />
                <TextField variant="textarea" row="5" label="Post description" name="body" type="text" />
                <TextField label="Author" name="author" type="text" />
                <TextField label="Photo" name="photo" type="text" />
                <button className="btn btn-dark mt-3" type="submit">Register</button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default PostNew;
