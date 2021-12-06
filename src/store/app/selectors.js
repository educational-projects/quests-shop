import { NameSpace } from "store/root-reducer";

export const getCurrentFilter = (state) => state[NameSpace.App].currentFilter
export const getSendOrderLoading = (state) => state[NameSpace.App].sendOrderLoading
