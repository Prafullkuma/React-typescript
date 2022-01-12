import { POST_TYPE, DELETE_POST_TYPE, EDIT_POST_TYPE, ADD_POST_TYPE } from '../Types/Post_type'

export const setLoadingAction = () => {
    return {
        type: POST_TYPE.POST_LOADING
    }
}

export const setSuccessAction = (post: any) => {
    return {
        type: POST_TYPE.POST_SUCCESS,
        payload: post
    }
}

export const setFailAction = (err: any) => {
    return {
        type: POST_TYPE.POST_FAIL,
        payload: err
    }
}

// add 

export const addPostActionLoading = (formData: any) => {
    return {
        type: ADD_POST_TYPE.ADD_POST_LOADING,
        payload: formData
    }
}

export const addPostActionSuccess = (post: any) => {
    console.log(post, "post")
    return {
        type: ADD_POST_TYPE.ADD_POST_SUCCESS,
        payload: post
    }
}

export const addPostActionFail = (err: any) => {
    return {
        type: ADD_POST_TYPE.ADD_POST_FAIL,
        payload: err
    }
}


//Delete Post Action

export const deletePostActionLoading = (id: number) => {
    return {
        type: DELETE_POST_TYPE.DELETE_POST_LOADING,
        payload: id
    }
}

export const deletePostActionSuccess = (id: number) => {
    return {
        type: DELETE_POST_TYPE.DELETE_POST_SUCCESS,
        payload: id
    }
}

export const deletePostActionFail = (err: string) => {
    return {
        type: DELETE_POST_TYPE.DELETE_POST_FAIL,
        payload: err
    }
}

//Edit 

export const editPostActionLoading = (formData: any) => {
    return {
        type: EDIT_POST_TYPE.EDIT_POST_LOADING,
        payload: formData
    }
}


export const editPostActionSuccess = (formData: any) => {
    console.log(formData, "formData")
    return {
        type: EDIT_POST_TYPE.EDIT_POST_SUCCESS,
        payload: formData
    }
}

export const editPostActionFail = (e: any) => {

    return {
        type: EDIT_POST_TYPE.EDIT_POST_FAIL,
        payload: e
    }
}