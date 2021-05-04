import React, { useEffect, useRef } from 'react';
import './PostEdit.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { showPostAction, updatePostAction } from './../../redux/actions/posts.actions';

import { useParams, useHistory } from 'react-router-dom';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {

const { id } = useParams();
let history = useHistory();

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
  dispatch(showPostAction(id));
}, [dispatch, id]);

const post = useSelector(state => state.posts.post);
const error = useSelector(state => state.posts.error);

const handleUpdateProduct = e => {
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
  history.push(`/`);

};
  return (
    <>
    { showFormEditPost &&
    <section className="edit-wrapper">
      <div className="form-edit-wrapper">
        <h1 className="form-title">Edit Post</h1>
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
