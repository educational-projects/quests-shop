import { NameSpace } from "store/root-reducer"

export const getQuests = (state) => state[NameSpace.Quests].quests;
export const getQuest = (state) => state[NameSpace.Quests].quest;
export const getQuestError = (state) => state[NameSpace.Quests].questError;
export const getQuestLoading = (state) => state[NameSpace.Quests].questLoading;
