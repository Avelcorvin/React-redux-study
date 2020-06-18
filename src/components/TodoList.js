import React from 'react';
import Todo from './Todo'




const TodoList =({todos})=>{
    console.log("todos",todos)
    return (
        <ul>
            {todos.map(
                (todo, key) =>  <Todo key={key}    {...todo}  />  
            )}</ul>
)}







export default TodoList