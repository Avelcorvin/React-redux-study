import React from 'react';

const AddTodo = ({ id, children, onTodoClick }) => {
    let input
    return (
        <div>
            <form
                onSubmit={(eo) => {
                    eo.preventDefault();
                    onTodoClick(input, id)
                    console.log(input.value)
                }}

            >
                {children}
                <input
                    ref={node => input = node} />
                <button type="submit">
                    AddTodo
             </button>
            </form>
        </div>
    )
}

export default AddTodo