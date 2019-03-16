import React from 'react'
import { render } from 'react-dom'
import throttle from 'lodash/throttle'
import { createStore, compose, applyMiddleware } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'
import { loadState, saveState } from './localStorage'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState()
const store = createStore(
    todoApp,
    persistedState,
    composeEnhancers(applyMiddleware())
)

store.subscribe(throttle(() => {    
    saveState({
        todos: store.getState().todos
    })
}, 1000))

render(
    <Root store={store} />, 
    document.getElementById('root')
)
