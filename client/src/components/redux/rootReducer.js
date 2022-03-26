import postReducer from './posts/postReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer;