import React, {useState, useEffect} from 'react';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

const Home = () => {
	const[blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const blog = 'http://localhost:4000/posts';

	useEffect(() => {
		fetch(blog)
		.then(res =>{
			return res.json()
		})
		.then(data => {
			console.log(data);
			setBlogs(data);
			setIsLoading(false);
		})
	}, []);

	return (
      <main className="Home">
        <section className="wrapper">
					{isLoading && <div>Loading...</div>}
     			{blogs && <BlogList blogs={blogs} title="All Blogs"  /> }
        </section>
      </main>
    )
}

export default Home
