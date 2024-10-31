import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Items } from '@/types/items';

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://457148e20d9aad34.mokky.dev/' }),
  endpoints: (builder) => ({
    getItems: builder.query<Items[], void>({
      query: () => 'items',
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
