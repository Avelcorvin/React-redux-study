import React from 'react';




const Todo = (props) => {
    const { data, text } = props
    console.log(props)
    return (
        <li key={data}
            >{text}</li>
)}



export default Todo