import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ blogs}) => {

	//
  const blogItem = blogs.map(blog => (
    <div className="blog-preview" key={blog.id}>
      <Link>
        <h3>{blog.title}</h3>
        <h4>Written by: {blog.author}</h4>
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
