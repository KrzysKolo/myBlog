import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ blogs}) => {

	//
  const blogItem = blogs.map(blog => (
    <div className="blog-preview" key={blog.id}>
      <Link to={`/blog/${blog.id}`}>
        <h3>{blog.title}</h3>
        <div className="author"><div className="aaa" />Written by: {blog.author}</div>
      </Link>
    </div>
    ));

    return (
      <div>
        {blogItem}
      </div>
    )
}

export default BlogList;
