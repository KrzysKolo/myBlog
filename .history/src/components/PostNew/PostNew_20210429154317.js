import React from 'react'
//Formik
import { useFormik } from 'formik';

const PostNew = () => {
  const formik = useFormik({
    initialValues:{
      title:'',
      body:'',
      author:'',
      photo:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  });
  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title Post</label>
        <input onChange={formik.handleChange} id="title" name="title" />
        <label htmlFor="body">Post</label>
        <input id="body" name="body" />
        <label htmlFor="author">Your name</label>
        <input id="author" name="author" />
        <label htmlFor="photo">Your avatar (URL)</label>
        <input id="photo" name="photo"/>
        <button type="submit">Add New Post</button>
      </form>
    </div>
  )
}

export default PostNew
