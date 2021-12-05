import { createReducer } from '@reduxjs/toolkit';
import { loadQuestError, loadQuestRequest, loadQuestsError, loadQuestsRequest, loadQuestsSuccess, loadQuestSuccess, resetQuest } from 'store/action';

const initialState = {
  quests: [],
  questsLoading: false,
  questsError: false,
  quest: null,
  questLoading: false,
  questError: false,
};

const quests = createReducer(initialState, (builder) => {
  builder
  .addCase(loadQuestsRequest, (state) => {
    state.questsLoading = true;
  })
  .addCase(loadQuestsSuccess, (state, action) => {
    const {quests} = action.payload;
    state.questsLoading = false;
    state.quests = quests;
  })
  .addCase(loadQuestsError, (state) => {
    state.questsLoading = false;
    state.questsError = true;
  })
  .addCase(loadQuestRequest, (state) => {
    state.questLoading = true;
  })
  .addCase(loadQuestSuccess, (state, action) => {
    const {quest} = action.payload;
    state.questLoading = false;
    state.quest = quest;
  })
  .addCase(loadQuestError, (state) => {
    state.questLoading = false;
    state.questError = true;
  })
  .addCase(resetQuest, (state) => {
    state.quest = null;
    state.questLoading = false;
    state.questError = false;
  })
})

export {quests}
