import stateChange,{todoStatus} from './stach'

function createState(state = {}, action) {
    return {
        todos: stateChange(state.todos, action),
        todo_show:todoStatus(state.todo_show, action)
}}


export default createState