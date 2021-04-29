import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/actions/posts.actions';


const BlogDetails = ({history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.posts.posts);
  const [blog, setBlog] = useState([blogs]);

  useEffect(() => {
    //Call the function to start downloading the products
    const getPosts = () => dispatch(getPostsAction(id));
    getPosts();
  }, []);

console.log(blog)
  return (
    <main className="BlogNote">
      BlogDetails - { id }
    </main>
  )
}

export default BlogDetails;
