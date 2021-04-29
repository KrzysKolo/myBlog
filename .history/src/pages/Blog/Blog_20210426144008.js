import React, { useEffect } from 'react';
import { postsFetch } from './../../data/postsFetch';

import './Blog.css';

const Blog = () => {

    useEffect(() => {
        postsFetch()
    },[]);

    return (
        console.log(postsFetch());
        <main className="Blog">
            Blog
        </main>
    )
}

export default Blog;
