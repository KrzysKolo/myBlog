import {
    POSTS_GET,
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,

  //SHOW ONE POST
    SHOW_POSTS_GET_REQUEST,
    SHOW_POSTS_GET_SUCCESS,
    SHOW_POSTS_GET_FAILURE,

  //ADD NEW POST
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,

  //DELETE ONE POST
     DELETE_POST,
     DELETE_POST_SUCCESS,
     DELETE_POST_FAILURE,

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
      setTimeout(() => {
      axiosClient
      .get(`./posts/${id}`)
      .then( response =>{
        console.log(response.data)
        dispatch(showPostSuccess(response.data))
      })
      .catch(error =>{
        console.log(error);
        dispatch(showPostFailure());
      });
    }, 500)
    };
  }
  export const showPost = () => ({
    type:SHOW_POSTS_GET_REQUEST,
  });
  export const showPostSuccess = (post) => ({
    type: SHOW_POSTS_GET_SUCCESS,
    payload: post,
  });
  export const showPostFailure = () => ({
    type: SHOW_POSTS_GET_FAILURE,
  });

  //ADD NEW POST
  export function addNewPostAction(post) {
    return dispatch => {
      dispatch(newPost());

      setTimeout(() => {
        axiosClient
        .post('./posts/', post)
        .then( response =>{
          console.log(response.data)
          dispatch(newPostSuccess(post))
        })
        .catch(error =>{
          console.log(error);
          dispatch(newPostFailure());
        });
      }, 500)
      };
    }

    export const newPost = () => ({
      type: ADD_POST
    });

    export const newPostSuccess = (post) => ({
      type: ADD_POST_SUCCESS,
      payload: post
    });

    export const newPostFailure = (post) => ({
      type: ADD_POST_FAILURE
    });
