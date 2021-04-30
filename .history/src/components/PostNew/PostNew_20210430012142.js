import React from 'react';
import './PostNew.css';

//Formik
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';

//import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux' ;
import { addNewPostAction } from  './../../redux/actions/posts.actions';

const PostNew = () => {

  const dispatch = useDispatch();
  const addPost = post => dispatch(addNewPostAction(post));
  const error = useSelector(state => state.post.error)

  const handleSubmit = e => {
    e.preventDefault();
    addPost({ id, title, body, author, photo });
  };

  const validate = Yup.object({
    title: Yup.string()
      .min(2, "Title must be at least 2 characters long")
      .max(30,"The title may contain max 30 characters")
      .required('Required'),
    body: Yup.string()
      .min(2, "The message must contain at least 2 characters")
      .max(500, "The message may contain max 250 characters")
      .required('Required'),
    author: Yup.string()
      .min(2, "The signature must contain at least 2 characters")
      .max(30, "The signature may contain max 30 characters")
      .required('Required'),
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
          onSubmit={handleSubmit}
        >
          {() => (
            <div>
              <h1 className="form-title">Add Post</h1>
              <Form className="form-wrapper">
                <TextField  label="Title post: " name="title" type="text" size="40"  />
                <TextField  variant="textarea" rows="5" cols="40" label="Post description: " name="body" type="text" />
                <TextField  label="Author: " name="author" type="text" size="40" />
                <TextField  label="Photo (URL): " name="photo" type="text" size="40"  />
                <div className="btn-wrapper">
                  <button className="btn" type="submit">Add</button>
                  <button className="btn" type="reset">Reset</button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default PostNew;
