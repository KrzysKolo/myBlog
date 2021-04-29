import {
//GET POSTS
    const POSTS_FETCHED
    POSTS_FETCHED_REQUEST
    POSTS_FETCHED_SUCCESS
    POSTS_FETCHED_FAILURE
    LOADING_STATES
} from './../constants'

initialState = {
    loadingState: {},
    posts: {},
}

function postsReducer ( state = initialState, action) {
    switch(action.type) {
        case "POSTS_FETCHED":
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state,
    }
}