import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

//fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

//import { connect } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deletePostAction } from './../../redux/actions/posts.actions';

const BlogList = ({ blogs}) => {

	//
  const blogItem = blogs.map(blog => (
    <div className="blog-preview" key={blog.id}>
      <div className="blog-ico">
        <FontAwesomeIcon icon={faMinusSquare} className="ico" onClick={() => console.log("edytuj")}/>
      </div>
      <Link to={`/post/${blog.id}` }>
        <h3>{blog.title}</h3>
        </Link>

        <div className="author">
        <div className="photo">
          <img src={blog.photo} alt={blog.author} />
        </div><h4>Written by: {blog.author}</h4></div>
      </div>
    ));
    return (
      <div>
        {blogItem}
      </div>
    )
}

export default BlogList;
