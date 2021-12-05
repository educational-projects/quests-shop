export const AppRoute = {
  Main: '/',
  Room: '/quest/:id',
  Contacts: '/contacts'
}

export const ApiRoute = {
  Quests: '/quests',
  Application: '/orders',
}

export const ComplexityToRussian = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий',
}

export const QuestTypeToRussian = {
  allQuests: 'Все квесты',
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi'
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
