import React from 'react';
import './Blog.css';

const Blog = () => {
    const renderPost = async() => {
        const url = 'http://localhost:4000/posts';
        const res = await fetch(url);
        const post = await res.json();
        console.log(post);
    }

    return (
        <main className="Blog">
            Blog
        </main>
    )
}

export default Blog;
