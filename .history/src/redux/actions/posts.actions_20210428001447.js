import {
    POSTS_GET,
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,
  } from '../constants';

  import axiosClient from './../api/posts';

  //GET THE POST LIST BY FETCHING API
export function getPostsAction () {
    return dispatch => {
        dispatch(getPosts());
        axiosClient
        .get('./posts')
        .then(res => {
            dispatch(getPostsSucces(res.data))
        })
        .catch( error => {
            dispatch(getPostsFailure())
        })
    }
}


  export const getPosts = () => ({
    type: POSTS_GET_REQUEST
  });

  export const getPostsSucces = products => ({
    type: POSTS_GET_SUCCESS,
    payload: products
  });

  export const getPostsFailure = () => ({
    type: POSTS_GET_FAILURE
  });
