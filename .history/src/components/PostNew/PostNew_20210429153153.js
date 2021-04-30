import React from 'react'

const PostNew = () => {
  return (
    <div>
      <h1>Add New Post</h1>
      <form>
        <label htmlFor="title">Title Post</label>
        <input id="title" />
        <label htmlFor="body">Post</label>
        <input id="body" />
        <label htmlFor="author">Your name</label>
        <input id="author" />
        <label htmlFor="photo">Your avatar (URL</label>
        <input id="photo" />
        <button type="submit">Add New Post</button>
      </form>
    </div>
  )
}

export default PostNew
