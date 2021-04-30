import Reactm { useEffect, useRef } from 'react';
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

  return (
    <>
    { showFormEditPost &&
    <section className="edit-wrapper">
      <div className="form-edit-wrapper">
        <h1 className="form-title">Add Post</h1>
        <form className="form-edit" >
          <label htmlFor="title" className="form-edit-label">Title post: </label>
          <input id="title" name="title" type="text" size="40"className="form-edit-input" />
          <label htmlFor="body" className="form-edit-label">Post: </label>
          <textarea rows="5" cols="40" name="body" id="body" type="text"className="form-edit-input" />
          <label htmlFor="author" className="form-edit-label">Author: </label>
          <input id="name" name="author" type="text" size="40" className="form-edit-input" />
          <label htmlFor="photo" className="form-edit-label">Photo (URL):</label>
          <input id="photo" name="photo" type="text" size="40" className="form-edit-input" />
          <div className="btn-wrapper">
            <button className="btn-form-edit" type="submit" onClick={closeForm} >Save </button>
            <button className="btn-form-edit" type="reset" onClick={closeForm} >Close </button>
          </div>
        </form>
      </div>
    </section> }
    </>

  )
}

export default PostEdit;
