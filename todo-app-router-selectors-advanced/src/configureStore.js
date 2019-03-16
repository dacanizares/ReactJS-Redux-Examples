
import { createStore, compose, applyMiddleware } from 'redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import todoApp from './reducers'

const configureStore = () => {
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

    return store
}

export default configureStore