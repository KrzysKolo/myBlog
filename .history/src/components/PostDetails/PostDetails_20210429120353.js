import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { showPostAction } from '../../redux/actions/posts.actions';

const PostDetails = () => {

  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPostAction(id));
  },[dispatch, id])
  const post = useSelector(state => state.posts.post);
  const error = useSelector(state => state.posts.error);
  console.log(id)
  console.log(post)

  if(!post) return "Loading...";
  return (
    <>
    { error ? (
      <div>Thete is an error, try it again...</div>
    ) : (
      <section className="wrapper">
        <section className="post-preview">
            Blog -{id}
        </section>
    </section>
    )};
    </>

  )
}

export default PostDetails;
