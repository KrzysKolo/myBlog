import React from 'react'
//Formik
import { Form, formik } from 'formik';
import * as Yup from 'yup';

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
        <input onChange={formik.handleChange} values={formik.values.name} id="title" name="title" />
        <label htmlFor="body">Post</label>
        <input onChange={formik.handleChange} values={formik.values.body} id="body" name="body" />
        <label htmlFor="author">Your name</label>
        <input onChange={formik.handleChange} values={formik.values.author} id="author" name="author" />
        <label htmlFor="photo">Your avatar (URL)</label>
        <input onChange={formik.handleChange} values={formik.values.photo} id="photo" name="photo"/>
        <button type="submit">Add New Post</button>
      </form>
    </div>
  )
}

export default PostNew
