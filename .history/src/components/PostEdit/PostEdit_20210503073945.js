import React, { useEffect, useRef } from 'react';
import './PostEdit.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { editPostAction, updatePostAction } from './../../redux/actions/posts.actions';

import { useParams } from 'react-router-dom';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {

const { id } = useParams();
const titleRef = useRef("");
const bodyRef = useRef("");
const authorRef = useRef("");
const photoRef = useRef("");

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

const handleUpdateProduct = (values, { restForm }) => {

  e.preventDefault();
  postUpdate({
    id,
    title: titleRef.current.values,
    body: bodyRef.current.values,
    author: authorRef.current.values,
    photo: photoRef.current.values
  });
  postUpdate(postUpdate);
  restForm();
  closeForm();

};
  return (
    <>
    { showFormEditPost &&

      <section className="edit-wrapper">
    <div className="form-edit-wrapper">
      <Formik
        initialValues={{
          title: {post.title},
          body: {post.body},
          author: {post.author},
          photo: {post.photo}
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <div>
            <h1 className="form-title">{name}</h1>
            <Form className="form-edit" onSubmit={handleUpdateProduct} >
              <TextField label="Title post: " name="title" type="text" size="40" />
              <TextField variant="textarea" rows="5" cols="40" label="Post description: " name="body" type="text" />
              <TextField label="Author: " name="author" type="text" size="40" />
              <TextField label="Photo (URL): " name="photo" type="text" size="40" />
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



        <form className="form-edit" onSubmit={handleUpdateProduct}>
          <label htmlFor="title" className="form-edit-label">Title post: </label>
          <input id="title" name="title" type="text" size="40"className="form-edit-input" defaultValue={post.title} ref={titleRef} />
          <label htmlFor="body" className="form-edit-label">Post: </label>
          <textarea rows="5" cols="40" name="body" id="body" type="text"className="form-edit-input" defaultValue={post.body} ref={bodyRef} />
          <label htmlFor="author" className="form-edit-label">Author: </label>
          <input id="name" name="author" type="text" size="40" className="form-edit-input" defaultValue={post.author} ref={authorRef} />
          <label htmlFor="photo" className="form-edit-label">Photo (URL):</label>
          <input id="photo" name="photo" type="text" size="40" className="form-edit-input" defaultValue={post.photo} ref={photoRef} />
          <div className="btn-wrapper">
            <button className="btn-form-edit" type="submit" >Save </button>
            <button className="btn-form-edit" type="reset" onClick={closeForm} >Close </button>
          </div>
        </form>
      </div>
    </section> }
    </>

  )
}

export default PostEdit;
