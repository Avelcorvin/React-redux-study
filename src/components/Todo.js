import React from 'react';




const Todo = (props) => {
    const { key, text } = props
    return (
        <li
            key={key}
            >{text}</li>
)}



export default Todo