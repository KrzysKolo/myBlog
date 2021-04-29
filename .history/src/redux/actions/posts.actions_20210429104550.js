import {
    POSTS_GET,
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,

    SHOW_POSTS_GET_REQUEST,
    SHOW_POSTS_GET_SUCCESS,
    SHOW_POSTS_GET_FAILURE,

  } from '../constants';

  import axiosClient from './../api/posts';

  //GET THE POST LIST BY FETCHING API
export function getPostsAction () {
    return dispatch => {
        dispatch(getPosts());
        setTimeout(() => {
        axiosClient
        .get('./posts')
        .then(res => {
            dispatch(getPostsSucces(res.data))
        })
        .catch( error => {
            dispatch(getPostsFailure(error))
        })
    }, 1000)
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

  //GET TO SHOW ONE POST

  export function showPostAction(id) {
    return dispatch => {
      dispatch(showPost(id));

      //GET THE PRODUCT
      axiosClient
      .get(`/posts/${id}`)
      .then( response =>{
        console.log(response.data)
        dispatch(showPostSuccess(response.data))
      })
      .catch(error =>{
        console.log(error);
        dispatch(showPostFailure());
      });
    };
  }
  export const showPost = () => ({
    type:SHOW_POSTS_GET_REQUEST
  });
  export const showPostSuccess = (post) => ({
    type: SHOW_POSTS_GET_SUCCESS,
    payload: post
  });
  export const showPostFailure = () => ({
    type: SHOW_POSTS_GET_FAILURE,
  });