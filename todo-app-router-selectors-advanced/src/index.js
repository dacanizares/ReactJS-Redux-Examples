import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(
    todoApp,
    persistedState
)
console.log(persistedState)

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    })
})

render(
    <Root store={store} />, 
    document.getElementById('root')
)
