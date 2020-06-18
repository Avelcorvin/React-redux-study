import { setVisibleFilter } from '../actions'


function stateChange(state = [], action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        default:
            return state
    }
}

export function todoStatus(state = setVisibleFilter.SHOW_ALL, action) {
    switch (action.type) {
        case setVisibleFilter.SHOW_ALL:
            return action.type
        case setVisibleFilter.SHOW_ACTIVE:
            return action.type
        case setVisibleFilter.SHOW_COMPLETED:
            return action.type
        default:
            return state
    }

}

export default stateChange;