import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "types/action";

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

export const loadQuestError = createAction(ActionType.LoadQuestError)
