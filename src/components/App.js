import React from 'react';
import Footer from './Footer'
import createState from '../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { WrapperDiv } from '../containers/wrapperTodolist'
import { WrapperAddTodo } from '../containers/wrapperAddTodo'
import { WrapperHeader } from '../containers/wrapperHeader'

export let store = createStore(createState)


const App = () => {
    let textInput = React.createRef();
    return (
        <Provider store={store}>
            <div style={{
                  margin: "0 auto",
                  width: "400px"}}>
            
                <div className="refTest" ref={textInput}></div>
                <WrapperHeader />
                <WrapperAddTodo>Добавиье запись  </WrapperAddTodo>
                <WrapperDiv />
                <Footer />
            </div>
        </Provider>
)}

export default App