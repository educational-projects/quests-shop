import { QuestTypeToRussian } from "const";
import { createSelector } from "reselect";
import { getCurrentFilter } from "store/app/selectors";
import { NameSpace } from "store/root-reducer"

const getQuests = (state) => state[NameSpace.Quests].quests;
export const getQuest = (state) => state[NameSpace.Quests].quest;
export const getQuestError = (state) => state[NameSpace.Quests].questError;
export const getQuestLoading = (state) => state[NameSpace.Quests].questLoading;

export const getFilteredQuests = createSelector(
  [getQuests, getCurrentFilter],
  (quests, currentFilter) => quests
  .filter((quest) => currentFilter === QuestTypeToRussian.allQuests
  ? quests
  : QuestTypeToRussian[quest.type] === currentFilter
  ),
);
