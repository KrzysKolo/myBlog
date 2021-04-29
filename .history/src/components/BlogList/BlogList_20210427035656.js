import React from 'react';

const BlogList = ({ blogs, title, handleDelete}) => {
    const blogItem = blogs.map(blog => (
        <div className="blog-previw" key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>Written by: {blog.author}</h4>
            <p></p>
        </div>
    ));
    return (
        <div>

        </div>
    )
}

export default BlogList;
