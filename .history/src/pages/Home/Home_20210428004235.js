import React, {useEffect} from 'react';
import BlogList from '../../components/BlogList/BlogList';
import './Home.css';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from './../../redux/actions/posts.actions';

const Home = () => {
const dispatch = useDispatch();
useEffect(() => {
	const getPosts = () => dispatch(getPostsAction());
	getPosts();
}, []);
//Access to ths state
//const loading = useSelector(state => state.posts.loading);
const error = useSelector(state => state.posts.error);
const blogs = useSelector(state => state.posts.posts)

	return (
		<>
		{error ? <div>{error}</div> : null}
      <main className="Home">
        <section className="wrapper">

					{loading ? <div>Loading...</div>} : null}
     			{blogs && <BlogList blogs={blogs} title="All Blogs"  /> }
        </section>
      </main>
		</>
    )
}

export default Home
