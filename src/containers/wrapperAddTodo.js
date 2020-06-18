import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'



const mapStateToProps = state => {
    return {
        id: state.todos.length,
    }}
const mapDispatchToProps = dispatch => ({
        onTodoClick: (input, id) => {
            dispatch(addTodo({ text: input.value, id }))
    }
})

export const WrapperAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)
