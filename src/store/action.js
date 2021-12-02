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
