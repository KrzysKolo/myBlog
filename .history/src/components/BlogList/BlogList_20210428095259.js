import React from 'react';
import './BlogList.css';

const BlogList = ({ blogs}) => {

	//
  const blogItem = blogs.map(blog => (
    <div className="blog-preview" key={blog.id}>
      <h3>{blog.title}</h3>
      <h4>Written by: {blog.author}</h4>
      <p>{blog.body}</p>
    </div>
    ));

    return (
      <div>
        {blogItem}
      </div>
    )
}

export default BlogList;
