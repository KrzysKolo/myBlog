import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { showPostAction } from '../../redux/actions';

const PostDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const getPost = id => dispatch(showPostAction(id))

  return (
    <div>

    </div>
  )
}

export default PostDetails;
