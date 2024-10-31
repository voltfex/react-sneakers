import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { itemsApi } from './slice/itemsSlice';
import filterReducer from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
    filters: filterReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
