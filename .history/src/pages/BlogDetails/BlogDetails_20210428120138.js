import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/actions/posts.actions';


const BlogDetails = () => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState([]);
  const blogs = useSelector(state => state.posts.posts)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostsAction(id));
  }, [dispatch, id]);
  console.log(id)
  console.log(blogs)
  console.log(blog);
  return (
    <main className="BlogNote">
      BlogDetails - { id }
    </main>
  )
}

export default BlogDetails;
