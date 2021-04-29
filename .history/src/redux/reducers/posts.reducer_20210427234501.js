import {
//GET POSTS
    POSTS_FETCHED,
    POSTS_FETCHED_REQUEST,
    POSTS_FETCHED_SUCCESS,
    POSTS_FETCHED_FAILURE,
    LOADING_STATES,
} from './../constants';

initialState = {
    posts: [],
    error: null,
    loading: false,
    post: {},

}

export function postsReducer ( state = initialState, action) {

    switch(action.type) {
        case POSTS_FETCHED_REQUEST:
            return {
                ...state,
                loading: true,
                post: {}
            }
        case POSTS_FETCHED_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false,
                post: {},
            }
        case POSTS_FETCHED_FAILURE:
            return {
                ...state,
                posts: [],
                loading: false,
                error: true,
            }
        default:
            return state,
    }
}