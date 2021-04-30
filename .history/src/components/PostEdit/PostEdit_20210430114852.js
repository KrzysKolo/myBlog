import React from 'react';
import './PostEdit.css';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {

  const closeForm = () => {
    setShowEditPost(false);
};

  return (
    <>
    { showFormEditPost &&
    <section className="form-edit-wrapper">
      <div className="form-edit">
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
