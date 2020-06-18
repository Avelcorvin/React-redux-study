import React from 'react';
import {store} from './App'
import {setVisibleFilter,togleTodo} from '../redux/actions/index'






const Footer = () => {
    const showAll=()=>store.dispatch(togleTodo(setVisibleFilter.SHOW_ALL))
    const showActive=()=>store.dispatch(togleTodo(setVisibleFilter.SHOW_ACTIVE))
    const showComlpleted=()=>store.dispatch(togleTodo(setVisibleFilter.SHOW_COMPLETED))
    return (<div>
              <button  
                className=" waves-effect waves-light orange btn-small"
                style = {{marginRight:"5px"}}
                onClick={showAll}
                >Все </button>
                
              <button
                className=" waves-effect waves-light orange btn-small"
                style = {{marginRight:"5px"}}
                onClick={showActive}
                >Активные </button>
                
              <button
                className=" waves-effect waves-light orange btn-small" 
                onClick={showComlpleted}
                >Завершенные </button></div>
)}

export default Footer