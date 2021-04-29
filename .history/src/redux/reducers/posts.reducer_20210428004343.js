import {
//GET POSTS
    POSTS_GET,
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,
} from './../constants';

initialState = {
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
        default:
            return state,
    }
}