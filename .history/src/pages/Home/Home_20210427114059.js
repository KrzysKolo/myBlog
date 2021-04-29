import React, {useState, useEffect} from 'react';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

const Home = () => {



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
