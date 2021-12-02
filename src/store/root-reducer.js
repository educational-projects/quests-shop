import { combineReducers } from 'redux';
import { app } from './app/app'

const NameSpace = {
  App: 'APP'
}

export const rootReducer = combineReducers({
  [NameSpace.App]: app,
})
