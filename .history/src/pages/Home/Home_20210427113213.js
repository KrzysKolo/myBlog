import React, {useState, useEffect} from 'react';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

const Home = () => {
	const[blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const blog = 'http://localhost:4000/posts';

	useEffect(() => {
	setTimeout(() => {
		fetch(blog)
		.then(res =>{
			if(!res.ok) {
				throw Error('could not fetch the data for that resource')
			}
			return res.json()
		})
		.then(data => {
			console.log(data);
			setBlogs(data);
			setIsLoading(false);
			setError(null);
		})
		.catch(err => {
			setIsLoading(false);
			setError(err.message);
		})
	}, 1000)
	}, []);

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
