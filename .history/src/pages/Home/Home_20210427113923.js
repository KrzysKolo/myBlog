import React, {useState, useEffect} from 'react';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

const Home = () => {
	const[blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const blog = 'http://localhost:4000/posts';


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
