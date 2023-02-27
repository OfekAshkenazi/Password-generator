import { combineReducers, legacy_createStore as createStore } from 'redux'

import { entityReducer } from './entity.reducer'

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined

const rootReducer = combineReducers({
    entityModule: entityReducer,
})

export const store = createStore(rootReducer, middleware)
