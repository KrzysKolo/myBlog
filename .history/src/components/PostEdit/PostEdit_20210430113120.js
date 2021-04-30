import React from 'react';
import './PostEdit.css';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {

  const closeForm = () => {
    setShowEditPost(false);
};

  return (
    <>
    { showFormEditPost &&
    <section className="form-wrapper">
      <div className="form-edit">
        <h1 className="form-title">Add Post</h1>
        <form className="form" >
          <label htmlFor="title" className="form-label">Title post: </label>
          <input id="title" name="title" type="text" size="40"className="form-input" />
          <label htmlFor="body" className="form-label">Post: </label>
          <textarea rows="5" cols="40" name="body" id="body" type="text"className="form-input" />
          <label htmlFor="author" className="form-label">Author: </label>
          <input id="name" name="author" type="text" size="40" className="form-input" />
          <label htmlFor="photo" className="form-label">Photo (URL):</label>
          <input id="photo" name="photo" type="text" size="40" className="form-input" />
          <div className="btn-wrapper">
            <button className="btn" type="submit" onClick={closeForm} >Save </button>
            <button className="btn" type="reset" onClick={closeForm} >Close </button>
          </div>
        </form>
      </div>
    </section> }
    </>

  )
}

export default PostEdit;
