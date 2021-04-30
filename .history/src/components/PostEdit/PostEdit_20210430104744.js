import React from 'react';
import './PostEdit.css';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {
  const closeForm = () => {
    setShowEditPost(false);
};

  return (
    <>
    { showFormEditPost &&
    <section className="form-wrapper">Edycja
      <button onClick={closeForm} >Close </button>
    </section> }
    </>

  )
}

export default PostEdit;
