import { createAction } from "@reduxjs/toolkit";

const ActionType = {
  ChangeFilter: 'user/changeFilter',
  LoadQuestsRequest: 'data/loadQuestsRequest',
  LoadQuestsSuccess: 'data/loadQuestsSuccess',
  LoadQuestsError: 'data/loadQuestsError',
  LoadQuestRequest: 'data/loadQuestRequest',
  LoadQuestSuccess: 'data/loadQuestSuccess',
  LoadQuestError: 'data/loadQuestError',
  ResetQuest: 'data/resetQuest',
  SendOrderRequest: 'data/sendOrderRequest',
  SendOrderSuccess: 'data/sendOrderSuccess',
  SendOrderError: 'data/sendOrderError',
}

export const changeFilter = createAction(
  ActionType.ChangeFilter,
  (filter) => ({
    payload: {
      filter,
    },
  }),
);

export const loadQuestsRequest = createAction(ActionType.LoadQuestsRequest)

export const loadQuestsSuccess = createAction(
  ActionType.LoadQuestsSuccess,
  (quests) => ({
    payload: {
      quests,
    },
  }),
);

export const loadQuestsError = createAction(ActionType.LoadQuestsError)

export const loadQuestRequest = createAction(ActionType.LoadQuestRequest)

export const loadQuestSuccess = createAction(
  ActionType.LoadQuestSuccess,
  (quest) => ({
    payload: {
      quest,
    },
  }),
);

export const loadQuestError = createAction(ActionType.LoadQuestError);

export const resetQuest = createAction(ActionType.ResetQuest);

export const sendOrderRequest = createAction(ActionType.SendOrderRequest);
export const sendOrderSuccess = createAction(ActionType.SendOrderSuccess);
export const sendOrderError = createAction(ActionType.SendOrderError);
