import React from 'react';
import Todo from './Todo'




const TodoList =({todos})=>{
    return (
        <ul>
            {todos.map(
                (todo, index) =>  <Todo key={index} data={index} {...todo} />  )}
        
        </ul>)}







export default TodoList