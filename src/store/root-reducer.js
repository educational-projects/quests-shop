import { combineReducers } from 'redux';
import { app } from './app/app'
import { quests } from './quests/quests';

export const NameSpace = {
  App: 'APP',
  Quests: 'QUESTS',
}

export const rootReducer = combineReducers({
  [NameSpace.App]: app,
  [NameSpace.Quests]: quests,
})
