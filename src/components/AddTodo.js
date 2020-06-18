import React from 'react';

const AddTodo = ({ id, onTodoClick }) => {
    let input;
    const submitHandler = (eo)=>{
            eo.preventDefault();
            if (input.value){
            return onTodoClick(input, id);
            } return console.log("Пустое значение")

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="todoInput">
                    Добавить запись </label>

                <input
                    className="todoInput" 
                    ref={node => input = node}/>

                <button
                className=" waves-effect waves-light orange btn-small"
                type="submit">
                    AddTodo</button>
            </form>
        </div>
    )
}

export default AddTodo