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
    <div className="form-edit">Edycja
      <button onClick={closeForm} >Close </button>
      </div>
    </section> }
    </>

  )
}

export default PostEdit;
