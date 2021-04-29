import React from 'react';

const BlogList = ({ blogs, title, handleDelete}) => {
    const blogItem = blogs.map(blog => (
        <div className="blog-previw" key={blog.id}>
            <h3>{blog.title}</h3>
            <h4>Written by: {blog.author}</h4>
            <p>{blog.body}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
    ));
    return (
        <div>
            <h2>{title}</h2>
            {blogItem}
        </div>
    )
}

export default BlogList;
