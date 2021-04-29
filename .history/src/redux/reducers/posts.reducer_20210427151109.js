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