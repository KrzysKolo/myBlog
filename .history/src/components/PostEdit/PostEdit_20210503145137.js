import React, { useEffect, useRef, useState} from 'react';
import './PostEdit.css';

//Formik
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { editPostAction, updatePostAction } from './../../redux/actions/posts.actions';

import { useParams } from 'react-router-dom';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {

const { id } = useParams();
const titleRef = useRef("")
const bodyRef = useRef("")
const authorRef = useRef("")
//const photoRef = useRef("")
/* const [newTitle, setNewTitle] = useState("")
const [newBody, setNewBody] = useState("")
const [newAuthor, setNewAuthor] = useState("")*/
const [newPhoto, setNewPhoto] = useState("")

const dispatch = useDispatch();
const postUpdate = newPost => (dispatch(updatePostAction(newPost)));

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


const [newPost, setNewPost] = useState({
  id: post.id,
  title: post.title,
  body: post.body,
  author: post.author,
  photo: post.photo
});

const handleUpdateProduct = (e, value)  => {

  console.log("Nowe dane", value)
  e.preventDefault();

 const setNewPost = ({
    id,
    title: value.title,
    body: value.body,
    author: value.author,
    photo: value.photo
  });

  console.log(newPost);

  postUpdate(newPost);
/*   restForm();
  closeForm(); */
  console.log("edycja klik");
};
console.log("edycja posta");


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
            photo: post.photo,
         }}
          validationSchema={validate}
          onSubmit={handleUpdateProduct}
          >
          {(formik) => (
            <div>
              <h1 className="form-title">Edit Post</h1>
              post - { id }
              <Form className="form-edit" onSubmit={handleUpdateProduct} >
                <TextField
                  label="Title post: "
                  name="title" type="text"
                  size="40"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}

                  />
                <TextField
                  variant="textarea"
                  rows="5"
                  cols="40"
                  label="Post description: "
                  name="body" type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.body}
                   />
                <TextField
                  label="Author: "
                  name="author"
                  type="text"
                  size="40"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.author}
                   />
                <TextField
                  label="Photo (URL): "
                  name="photo"
                  type="text"
                  size="40"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.photo}
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

