import { loadavg } from "os"
import { POST_TYPE, DELETE_POST_TYPE, EDIT_POST_TYPE, ADD_POST_TYPE } from "../Types/Post_type"

const initialState = {
    loading: false,
    post: [],
    error: null
}

const postReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case POST_TYPE.POST_LOADING:
            return {
                ...state,
                loading: true
            }
        case POST_TYPE.POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: [...action.payload]
            }

        case POST_TYPE.POST_FAIL:
            return {
                ...state,
                error: action.payload
            }
        //
        case ADD_POST_TYPE.ADD_POST_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_POST_TYPE.ADD_POST_SUCCESS:
            return {
                ...state,
                post: [action.payload, ...state.post],
                loading: false
            }

        //Delete
        case DELETE_POST_TYPE.DELETE_POST_LOADING:
            return {
                ...state,
                loading: true
            }
        case DELETE_POST_TYPE.DELETE_POST_SUCCESS:
            return {
                ...state,
                post: state.post.filter((ele: any) => {
                    return ele.id !== action.payload
                }),
                loading: false
            }

        case DELETE_POST_TYPE.DELETE_POST_FAIL:
            return {
                ...state,
                error: action.payload
            }

        //Edit
        case EDIT_POST_TYPE.EDIT_POST_LOADING:
            return {
                ...state,
                loading: true
            }

        case EDIT_POST_TYPE.EDIT_POST_SUCCESS:
            return {
                ...state,
                post: state.post.map((ele: any) => {
                    if (ele.id === action.payload.id) {
                        return { title: action?.payload?.title, body: action?.payload?.body }
                    }
                    else {
                        return ele
                    }

                })
            }
        case EDIT_POST_TYPE.EDIT_POST_FAIL:
            return {
                ...state,
                post: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default postReducer