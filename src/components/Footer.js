import React from 'react';
import {store} from './App'
import {setVisibleFilter,togleTodo} from '../actions'






const Footer = () => {
    const showAll=()=>store.dispatch(togleTodo(setVisibleFilter.SHOW_ALL))
    const showActive=()=>store.dispatch(togleTodo(setVisibleFilter.SHOW_ACTIVE))
    const showComlpleted=()=>store.dispatch(togleTodo(setVisibleFilter.SHOW_COMPLETED))
    return (
        <div>
            <button
            onClick={showAll}
            >Все </button>
            
            <button
            onClick={showActive}
            >Активные </button>
            
            <button 
            onClick={showComlpleted}
            >Завершенные </button></div>

)}

export default Footer