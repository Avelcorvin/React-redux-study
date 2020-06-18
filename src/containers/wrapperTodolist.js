import TodoList from '../components/TodoList'
import { setVisibleFilter } from '../actions/index'
import { connect } from 'react-redux'




const getVisibilityFilter = (todos, todo_show) => {
    switch (todo_show) {
        case setVisibleFilter.SHOW_ACTIVE:
            return todos.filter(e => !e.completed)
        case setVisibleFilter.SHOW_COMPLETED:
            return todos.filter(e => e.completed)
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibilityFilter(state.todos, state.todo_show)
    }
}



export const WrapperDiv = connect(mapStateToProps)(TodoList)