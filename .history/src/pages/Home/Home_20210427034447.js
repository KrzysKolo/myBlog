import React, {useState} from 'react';
import './Home.css';
const Home = () => {
	const[blogs, setBlogs] = useState([
		{title: "My new website", body: "Jakiś tekst. hshdshd hsajhsa jsjahsas jcncnsdsj sjjhdsd", author: "Krzysia", id: 1},
		{title: "Tytuł 2", body: "Jakiś tekst. hshdshd hsajhsa jsjahsas jcncnsdsj sjjhdsd", author: "Basia", id: 2},
		{title: "Tytuł 3", body: "Jakiś tekst. hshdshd hsajhsa jsjahsas jcncnsdsj sjjhdsd", author: "Tomek", id: 3},
	])
    return (
      <main className="Home">
        <section className="wrapper">
          Home
        </section>
      </main>
    )
}

export default Home
