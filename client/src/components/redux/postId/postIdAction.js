import {UPDATE_CURRENT_ID} from './postIdType'


export const updateId = (id)=>{
    return {type: UPDATE_CURRENT_ID, payload: id}
}