import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import Loading from './../Loading';
import PostEdit from './../PostEdit';

//fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faEdit } from '@fortawesome/free-solid-svg-icons';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { editPostAction } from '../../redux/actions/posts.actions';

//REACT-ROUTER-DOM
import { useParams, useHistory } from 'react-router-dom';

const PostDetails = () => {

  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editPostAction(id));
  },[dispatch, id])
  const post = useSelector(state => state.posts.post);
  const error = useSelector(state => state.posts.error);
  const loading = useSelector(state => state.posts.loading);

  console.log(id)
  console.log(post)
  //console.log(error)

  //if(!post) return "Loading...";
  //EDIT POST
  const [showFormEditPost, setShowEditPost] = useState(false);

  const openFormEditPost = ( { id }) => {
    setShowEditPost(prev => !prev);
  };

  return (
    <>
    <section className="wrapper">
    	{error && <div>{error}</div> }
			{loading && <Loading /> }
     	{post &&  (
      <section className="post-preview">
        <header className="header">
           <div className="header-icons">
              <FontAwesomeIcon icon={faBackward} className="ico" onClick={() => console.log("powrót")}/>
              <FontAwesomeIcon icon={faEdit} className="ico" onClick={openFormEditPost} name="Edit Post"  />
            </div>
            <section className="section__post-preview">
              <div className="photo">
                <img src={post.photo} alt={post.author} />
              </div>
              <div className="title-info">
                <h3 className="title-post">{post.title}</h3>
                <h5 className="title-author">{post.author}</h5>
              </div>
            </section>
          </header>
          <aside className="post">
            <p>{post.body}</p>
          </aside>
        </section>)
       }
      </section>
      <PostEdit showFormEditPost={showFormEditPost} setShowEditPost={setShowEditPost} id={id}/>
    </>
  )
}

export default PostDetails;
