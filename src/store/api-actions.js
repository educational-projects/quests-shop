export const fetchQuestsAction = () => (
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get('/quests')
      console.log(data)
    } catch {
      console.log('catch')
    }
  }
)
