import {fetchPost, fetchSuccess, fetchError, createPost} from './postAction'
import {FETCH_POST, CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_SUCCESS, FETCH_ERROR} from './postType'


const initialState = {
    loading: false, 
    data: [], 
    error: ''
}

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_POST:
            console.log('loading');
            return {...state, loading: true}
        case FETCH_SUCCESS: 
            console.log('fetched');
            return {...state, loading: false, data: action.payload, error: ''}
        case FETCH_ERROR: 
            console.log('error');
            return {...state, loading: false, error: action.payload}
        case CREATE_POST: 
            return state
        default:
            return state
    }
}

export default reducer;