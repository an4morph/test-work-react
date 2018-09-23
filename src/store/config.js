import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import contact from './reducers/contacts'

const rootReducer = combineReducers({
  contact,
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
