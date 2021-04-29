import React, {useState} from 'react';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

const Home = () => {
	const[blogs, setBlogs] = useState(null);

	const blog = 'http://localhost:4000/posts';

	useEffect(() => {
		fetch(blog)
		.then(res =>{
			return res.json()
		})
		.then(data => {
			console.log(data)
		})
	}, [])

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	}
    return (
      <main className="Home">
        <section className="wrapper">
          <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </section>
      </main>
    )
}

export default Home
