import React from 'react'
//Formik
import { Form, formik } from 'formik';
import * as Yup from 'yup';

const PostNew = () => {
  const InitialValues = {
    title: '',
    body: '',
    author: '',
    photo: '',
  }

const validationSchema = () => Yup.object({
  title: Yup.string().required("The title of the post is required").min(2, "Title must be at least 2 characters long").max(30,"The title may contain max 30 characters"),
  body: Yup.string().required("Message is required").min(2, "The message must contain at least 2 characters").max(250, "The message may contain max 250 characters"),
  author: Yup.string().required("Your signature is required").min(2, "The signature must contain at least 2 characters").max(30, "The signature may contain max 30 characters"),
  photo: Yup.string(),

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
