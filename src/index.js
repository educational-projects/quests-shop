import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/app/app';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/root-reducer';
import { fetchQuestsAction } from 'store/api-actions';
import { createApi } from 'services/api';

const api = createApi()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  })
})

store.dispatch(fetchQuestsAction())

render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
