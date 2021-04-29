import React, {useState, useEffect} from 'react';
import useFetch from './../../data/useFetch';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

const Home = () => {
	const { data, isLoading, error } = useFetch('http://localhost:4000/posts');

	return (
      <main className="Home">
        <section className="wrapper">
					{error && <div>{error}</div>}
					{isLoading && <div>Loading...</div>}
     			{blogs && <BlogList blogs={blogs} title="All Blogs"  /> }
        </section>
      </main>
    )
}

export default Home
