import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/actions/posts.actions';


const BlogDetails = ({history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();



  useEffect(() => {
    //Call the function to start downloading the products
    const getPosts = () => dispatch(getPostsAction(id));
    getPosts();
  }, []);
  const blogs = useSelector(state => state.posts.posts);
console.log(blogs)
  return (
    <main className="BlogNote">
      BlogDetails - { id }
    </main>
  )
}

export default BlogDetails;
