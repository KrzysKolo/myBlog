import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

//import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/reducers/posts.reducer';


const BlogDetails = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.posts.posts)
  const {id} = useParams();

  return (
    <main className="BlogNote">
      BlogDetails - { id }
    </main>
  )
}

export default BlogDetails;
