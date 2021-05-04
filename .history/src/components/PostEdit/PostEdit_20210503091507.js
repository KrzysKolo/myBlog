import React, { useEffect, useRef } from 'react';
import './PostEdit.css';
import { v4 as uuidv4 } from 'uuid';

//Formik
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { editPostAction, updatePostAction } from './../../redux/actions/posts.actions';

import { useParams } from 'react-router-dom';

const PostEdit = ({ showFormEditPost, setShowEditPost, }) => {

const { id } = useParams();
const titleRef = useRef();
const bodyRef = useRef();
const authorRef = useRef();
const photoRef = useRef();

const dispatch = useDispatch();
const postUpdate = post => (dispatch(updatePostAction(post)));

  const closeForm = () => {
    setShowEditPost(false);
};

useEffect(() => {
  dispatch(editPostAction(id));
}, [dispatch, id]);

const post = useSelector(state => state.posts.post);
const error = useSelector(state => state.posts.error);

const validate = Yup.object({
  title: Yup.string()
    .min(2, "Title must be at least 2 characters long")
    .max(30, "The title may contain max 30 characters")
    .required('Required'),
  body: Yup.string()
    .min(2, "The message must contain at least 2 characters")
    .max(5000, "The message may contain max 5000 characters")
    .required('Required'),
  author: Yup.string()
    .min(2, "The signature must contain at least 2 characters")
    .max(30, "The signature may contain max 30 characters")
    .required('Required'),
  photo: Yup.string()
});

const handleUpdateProduct = (e, values) => {

  e.preventDefault();
  postUpdate({
    id,
    title: titleRef.current.value,
    body: bodyRef.current.value,
    author: authorRef.current.value,
    photo: photoRef.current.value
  });
  postUpdate(postUpdate);
  closeForm();

};
  return (
    <>
    { showFormEditPost &&

      <section className="edit-wrapper">
       <div className="form-edit-wrapper">
        <Formik
           initialValues={{
            title: post.title,
            body: post.body,
            author: post.author,
            photo: post.photo
            }}
          validationSchema={validate}
          onSubmit={handleUpdateProduct}
          >
          {(formik) => (
            <div>
              <h1 className="form-title">Edit Post</h1>
              <Form className="form-edit" onSubmit={handleUpdateProduct} >
                <TextField label="Title post: " name="title" type="text" size="40" ref={titleRef} />
                <TextField variant="textarea" rows="5" cols="40" label="Post description: " name="body" type="text"ref={bodyRef} />
                <TextField label="Author: " name="author" type="text" size="40" ref={authorRef} />
                <TextField label="Photo (URL): " name="photo" type="text" size="40" ref={photoRef}/>
                <div className="btn-wrapper">
                  <button className="btn-form-edit" type="submit" >Save </button>
                  <button className="btn-form-edit" type="reset" onClick={closeForm} >Close </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </section>
    }
  </>
  )
}

export default PostEdit;

