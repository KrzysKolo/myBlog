import {
//GET POSTS
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,

//GET TO SHOW ONE POST
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

} from './../constants';

const initialState = {
    posts: [],
    error: null,
    loading: false,
    post: {},

}

export function postsReducer ( state = initialState, action) {

    switch(action.type) {
        case POSTS_GET_REQUEST:
            return {
                ...state,
                loading: true,
                post: {}
            }
        case POSTS_GET_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false,
                post: {},
            }
        case POSTS_GET_FAILURE:
            return {
                ...state,
                posts: [],
                loading: false,
                error: true,
            }
        //GET TO SHOW ONE PRODUCT
        case SHOW_POSTS_GET_REQUEST:
            return{
                ...state,
                error: null,
                loading: true,
            };
        case SHOW_POSTS_GET_SUCCESS:
            return {
                ...state,
                post: action.payload,
                error: null,
                loading: false,
            };
        case SHOW_POSTS_GET_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            }
        //ADD NEW POST
        case ADD_POST:
            return {
                ...state,
                error: null,
                loading: true
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                posts: [...state.posts, action.payload]
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            };
        //DELETE ONE POST
        case DELETE_POST:
            return {
                ...state,
                error: null,
                loading: true
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                posts: state.posts.filter(post => post.id !=== action.payload)
            };
        case DELETE_POST_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return state
    }
}