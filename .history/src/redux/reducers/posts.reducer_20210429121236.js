import {
//GET POSTS
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,

//GET TO SHOW ONE POST
    SHOW_POSTS_GET_REQUEST,
    SHOW_POSTS_GET_SUCCESS,
    SHOW_POSTS_GET_FAILURE,

} from './../constants';

const initialState = {
    posts: [],
    error: null,
    loading: false,
    post: [],

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
                error: null
            };
        case SHOW_POSTS_GET_SUCCESS:
            return {
                ...state,
                posts: state.products.map(post => post.id === action.payload.id ? (post = action.payload) : post),
                error: null,
            };
        case SHOW_POSTS_GET_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}