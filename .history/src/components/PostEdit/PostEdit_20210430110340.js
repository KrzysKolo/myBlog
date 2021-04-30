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
          <Form className="form-wrapper" >
            <TextField label="Title post: " name="title" type="text" size="40" />
            <TextField variant="textarea" rows="5" cols="40" label="Post description: " name="body" type="text" />
            <TextField label="Author: " name="author" type="text" size="40" />
            <TextField label="Photo (URL): " name="photo" type="text" size="40" />
            <div className="btn-wrapper">
              <button className="btn" type="submit" onClick={closeForm} >Close </button>
            </div>
          </Form>
        </div>


      </div>
    </section> }
    </>

  )
}

export default PostEdit;
