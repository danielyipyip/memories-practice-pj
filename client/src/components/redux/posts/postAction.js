import * as postTypes from './postType'
import axios from 'axios'

const url='http://localhost:5000/posts'

export const fetchPost = () =>{
    return {type: postTypes.FETCH_POST}
}

export const fetchSuccess = (data) =>{
    return {type: postTypes.FETCH_SUCCESS, 
        payload: data
    }
}

export const fetchError = (error) =>{
    return {type: postTypes.FETCH_ERROR, 
        payload: error
    }
}

export const getPost = (dispatch) =>{
    return (dispatch) => {
        dispatch( fetchPost() )
        axios.get(url)
        .then( data => dispatch(fetchSuccess(data.data)) )
        .catch( error => dispatch(fetchError(error)) )
    }
}

export const createPost = (data) =>{
    return {type: postTypes.CREATE_POST, payload: data}
}