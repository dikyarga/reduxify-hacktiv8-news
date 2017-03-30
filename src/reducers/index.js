import { combineReducers } from 'redux'
import { newsReducer } from './News'
import { peopleReducer } from './Peoples'

const reducers = combineReducers({
  News: newsReducer,
  People: peopleReducer
})

export default reducers
