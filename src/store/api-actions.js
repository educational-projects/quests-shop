import { ApiRoute } from "const"
import { loadQuestError, loadQuestRequest, loadQuestsError, loadQuestsRequest, loadQuestsSuccess, loadQuestSuccess } from "./action"

export const fetchQuestsAction = () => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestsRequest())
    try {
      const {data} = await api.get(ApiRoute.Quests)
      dispatch(loadQuestsSuccess(data))
    } catch {
      dispatch(loadQuestsError())
    }
  }
)

export const fetchQuestAction = (id) => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestRequest())
    try {
      const {data} = await api.get(`${ApiRoute.Quests}/${id}`)
      dispatch(loadQuestSuccess(data))
    } catch {
      dispatch(loadQuestError())
    }
  }
)
