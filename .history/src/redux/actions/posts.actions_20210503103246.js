import history from '../../history';
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

  //UPDATE POST
     UPDATE_POST,
     UPDATE_POST_SUCCESS,
     UPDATE_POST_FAILURE,

  //EDIT POST
     EDIT_POST,
     EDIT_POST_SUCCESS,
     EDIT_POST_FAILURE,

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
          history.push("/");
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

  //DELETE ONE POST
  export function deletePostAction(id) {
    return dispatch => {
      dispatch(deletePost());

      setTimeout(() => {
        axiosClient
        .delete(`./posts/${id}`)
        .then( response =>{
          console.log(response.data)
          dispatch(deletePostSuccess(id))
        })
        .catch(error =>{
          console.log(error);
          dispatch(deletePostFailure());
        });
      }, 500)
      };
    }

    export const deletePost = () => ({
      type: DELETE_POST
    });

    export const deletePostSuccess = (id) => ({
      type: DELETE_POST_SUCCESS,
      payload: id
    });

    export const deletePostFailure = () => ({
      type: DELETE_POST_FAILURE
    });
// EDIT POST
export function editPostAction(id, post) {
  return dispatch => {
    dispatch(editPost(id, post));

    setTimeout(() => {
      axiosClient
      .patch(`/posts/${id}`, post)
      .then( response =>{
        console.log(response.data)
        dispatch(editPostSuccess(response.data))
        history.push("/");
      })
      .catch(error =>{
        console.log(error);
        dispatch(editPostFailure());
      });
    }, 500)
    };
  }

  export const editPost = () => ({
    type: EDIT_POST
  });

  export const editPostSuccess = (post) => ({
    type: EDIT_POST_SUCCESS,
    payload: post
  });

  export const editPostFailure = () => ({
    type: EDIT_POST_FAILURE
  });

// UPDATE POST
export function updatePostAction( id, post) {
  return dispatch => {
    dispatch(updatePost());

    setTimeout(() => {
      axiosClient
      .put(`./posts/${post.id}`, post)
      .then( response =>{
        console.log(response.data)
        dispatch(updatePostSuccess(response.data))
        history.push("/");
      })
      .catch(error =>{
        console.log(error);
        dispatch(updatePostFailure());
      });
    }, 500)
    };
  }

  export const updatePost = () => ({
    type: UPDATE_POST
  });

  export const updatePostSuccess = (post) => ({
    type: UPDATE_POST_SUCCESS,
    payload: post
  });

  export const updatePostFailure = () => ({
    type: UPDATE_POST_FAILURE
  });

