import { QuestTypeToRussian } from "const";
import { createSelector } from "reselect";
import { getCurrentFilter } from "store/app/selectors";
import { NameSpace } from "store/root-reducer"
import { getCapitalizingString } from "utils/utils";

const getQuests = (state) => state[NameSpace.Quests].quests;
export const getQuest = (state) => state[NameSpace.Quests].quest;
export const getQuestError = (state) => state[NameSpace.Quests].questError;
export const getQuestLoading = (state) => state[NameSpace.Quests].questLoading;

export const getFilteredQuests = createSelector(
  [getQuests, getCurrentFilter],
  (quests, currentFilter) => quests
  .filter((quest) => currentFilter === QuestTypeToRussian.AllQuests
  ? quests
  : QuestTypeToRussian[getCapitalizingString(quest.type)] === currentFilter
  ),
);
