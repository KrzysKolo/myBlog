import React, {useState} from 'react';
import BlogList from './../Blog/Blog';
import './Home.css';

const Home = () => {
	const[blogs, setBlogs] = useState([
		{title: "My new website", body: "Jakiś tekst. hshdshd hsajhsa jsjahsas jcncnsdsj sjjhdsd", author: "Krzysia", id: 1},
		{title: "Tytuł 2", body: "Jakiś tekst. hshdshd hsajhsa jsjahsas jcncnsdsj sjjhdsd", author: "Basia", id: 2},
		{title: "Tytuł 3", body: "Jakiś tekst. hshdshd hsajhsa jsjahsas jcncnsdsj sjjhdsd", author: "Tomek", id: 3},
	]);

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
