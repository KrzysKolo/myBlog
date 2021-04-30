import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ blogs}) => {

	//
  const blogItem = blogs.map(blog => (
    <div className="blog-preview" key={blog.id}>
      <Link to={`/post/${blog.id}` }>
        <h3>{blog.title}</h3>
        </Link>

        <div className="author"><div className="photo">
          <img src={blog.photo} alt={blog.author} />
        </div><h4>Written by: {blog.author}</h4></div>
      </div>
    ));
    return (
      <div>
        {blogItem}
      </div>
    )
}

export default BlogList;
