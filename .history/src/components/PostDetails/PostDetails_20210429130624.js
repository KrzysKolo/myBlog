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
  console.log(error)

  if(!post) return "Loading...";
  return (
    <>
    { error ? (
      <div>Thete is an error, try it again...</div>
    ) : (
      <section className="wrapper">
        <section className="post-preview">
          <header className="header__post-preview">
              <div className="photo">
                <img src={post.photo} alt={post.author} />
              </div>
              <div className="title-info">
                <h3 className="title-post">{post.title}</h3>
                <h5 className="title-author">{post.author}</h5>
              </div>
          </header>
          <aside className="post">
            <p>{post.body}</p>
          </aside>

        </section>
    </section>
    )}
    </>

  )
}

export default PostDetails;
