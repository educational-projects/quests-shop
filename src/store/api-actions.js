import { ApiRoute, ToastMessage } from "const"
import cogoToast from 'cogo-toast';
import {
  loadQuestError, loadQuestRequest, loadQuestsError, loadQuestsRequest, loadQuestsSuccess,
  loadQuestSuccess, sendOrderError, sendOrderRequest, sendOrderSuccess
   } from "./action"

export const fetchQuestsAction = () => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestsRequest());
    try {
      const {data} = await api.get(ApiRoute.Quests)
      dispatch(loadQuestsSuccess(data));
    } catch {
      dispatch(loadQuestsError());
    }
  }
)

export const fetchQuestAction = (id) => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestRequest());
    try {
      const {data} = await api.get(`${ApiRoute.Quests}/${id}`);
      dispatch(loadQuestSuccess(data));
    } catch {
      dispatch(loadQuestError());
    }
  }
)

export const sendOrder = ({name, phone, peopleCount, isLegal}, resetForm) => (
  async (dispatch, _getState, api) => {
    dispatch(sendOrderRequest());
    try {
      await api.post(ApiRoute.Application, {name, phone, peopleCount, isLegal});
      dispatch(sendOrderSuccess());
      resetForm();
      cogoToast.success(ToastMessage.SendForm);
    } catch {
      dispatch(sendOrderError());
      cogoToast.error(ToastMessage.SendFormError)
    }
  }
)
