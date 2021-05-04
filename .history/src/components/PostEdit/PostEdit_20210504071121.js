import React, { useEffect, useRef, useState} from 'react';
import './PostEdit.css';

//Formik
import { Form, Formik, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { updatePostAction, showPostAction } from './../../redux/actions/posts.actions';

import { useParams } from 'react-router-dom';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {

const { id } = useParams();


const dispatch = useDispatch();
const postUpdate = post => (dispatch(updatePostAction(post)));

  const closeForm = () => {
    setShowEditPost(false);
};

const post = useSelector(state => state.posts.post);

const error = useSelector(state => state.posts.error);
const { title, author, photo } = post;


 useEffect(() => {
  dispatch(showPostAction(id));
}, [dispatch, id]);



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

let titleRef = React.createRef();
let bodyRef  = React.createRef();
let authorRef = React.createRef();
let photoRef = React.createRef();

const initialValues = {
  id: post.id,
  title:  post.title,
  body: post.body,
  author: post.author,
  photo: post.photo,
};
const [newTitle, setNewTitle] = useState("");

console.log(newTitle)
console.log(post.title)

const handleUpdatePost = (e )  => {

  console.log("klik")
  e.preventDefault();

  postUpdate({
    id,
    title: titleRef,
    body: bodyRef,
    author: authorRef,
    photo: photoRef,
  });

  console.log(postUpdate.title);

  postUpdate(postUpdate);
  closeForm();

  console.log("edycja klik");
};
console.log("edycja posta");

  return (
    <>
    { showFormEditPost &&

      <section className="edit-wrapper">
       <div className="form-edit-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          //onSubmit={handleUpdatePost}
          >
          {(formik) => (
            <div>
              <h1 className="form-title">Edit Post</h1>
              post - { id }
              <Form className="form-edit" onSubmit={handleUpdatePost}>
                <TextField
                  label="Title post: "
                  name="title" type="text"
                  size="40"
                  ref={node => (titleRef = node)}


                  />
                <TextField
                  variant="textarea"
                  rows="5"
                  cols="40"
                  label="Post description: "
                  name="body" type="text"
                  ref={node => (bodyRef = node)}
                   />
                <TextField
                  label="Author: "
                  name="author"
                  type="text"
                  size="40"
                  ref={node => (authorRef = node)}
                  />
                <TextField
                  label="Photo (URL): "
                  name="photo"
                  type="text"
                  size="40"
                  ref={node => (photoRef = node)}
                 />
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

