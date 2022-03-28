import {UPDATE_CURRENT_ID} from './postIdType'
import {updateId} from './postIdAction'

const initialId={id: 0};

const reducer = (status=initialId, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_ID:
            return {...status, id:action.paayload}
        default:
            return status
    }
}

export default reducer