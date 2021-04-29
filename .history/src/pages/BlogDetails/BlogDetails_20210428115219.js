import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/reducers/posts.reducer';


const BlogDetails = () => {

  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.posts.posts)
  const {id} = useParams();

  useEffect(() => {
   setBlog(...blogs.filter((blog) => blog.id === id))
  }, [blogs, id]);
  console.log(id)
  console.log(blog);
  return (
    <main className="BlogNote">
      BlogDetails - { id }
    </main>
  )
}

export default BlogDetails;
