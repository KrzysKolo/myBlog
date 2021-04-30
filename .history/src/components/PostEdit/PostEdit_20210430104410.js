import React from 'react';
import './PostEdit.css';

const PostEdit = ({ showFormEditPost, setShowEditPost }) => {
  return (
    <>
    { showFormEditPost && <div>Edycja
      <button onClick={closeForm} >Close </button>
    </div> }
    </>

  )
}

export default PostEdit;
