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
        <div>
          <h1 className="form-title">Add Post</h1>
          <form className="form-wrapper" >
            <label htmlFor="title">Title post: </label>
            <input id="title" name="title" type="text" size="40" />
            <label htmlFor="body">Post: </label>
            <textarea rows="5" cols="40" name="body" id="body" type="text" />
            <label htmlFor="author">Author: </label>
            <input id="name" name="author" type="text" size="40" />
            <label htmlFor="photo">Photo (URL):</label>
              <input id="photo" name="photo" type="text" size="40" />
            <div className="btn-wrapper">
              <button className="btn" type="submit" onClick={closeForm} >Close </button>
            </div>
          </form>
        </div>


      </div>
    </section> }
    </>

  )
}

export default PostEdit;
