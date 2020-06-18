import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../redux/actions'



const mapStateToProps = state => ({
        id: state.todos.length,
    })
const mapDispatchToProps = dispatch => ({
        onTodoClick: (input, id) => {
            dispatch(
                addTodo({ text: input.value, id }))//actions
    }
})

export const WrapperAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)
