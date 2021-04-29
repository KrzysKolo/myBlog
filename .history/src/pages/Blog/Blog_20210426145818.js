import React, { useEffect } from 'react';
//import { postsFetch } from './../../data/postsFetch';

import './Blog.css';

const Blog = () => {
    const postsFetch = async() => {
        const url = 'http://localhost:4000/posts';
        const res = await fetch(url);
        const posts = await res.json();
        console.log(posts);
        return posts;
    }
    let data = postsFetch();
    console.log(data.PromisResult)

    return (

        <main className="Blog">
            Blog

        </main>
    )
}

export default Blog;
