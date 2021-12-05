export const AppRoute = {
  Main: '/',
  Room: '/quest/:id',
  Contacts: '/contacts'
}

export const ApiRoute = {
  Quests: '/quests',
  Application: '/orders',
}

export const Complexity = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий',
}

export const QuestType = {
  adventures: 'приключения',
  horror: 'ужасы',
  mystic: 'мистика',
  detective: 'детектив',
  'sci-fi': 'научно-фантастический'
}

export const FormType = {
  name: 'text',
  phone: 'tel',
  peopleCount: 'number',
}

export const ToastMessage = {
  SendForm: 'Ваша заявка успешно отправлена',
  SendFormError: 'Не удалось отправить форму, проверьте правильность данных',
}
