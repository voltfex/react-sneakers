import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FiltersProps } from '@/types/items';

interface FilterState {
  value: FiltersProps;
}

const initialState: FilterState = {
  value: {
    brand: [],
    priceRange: { from: 0, to: 1000 },
    sizes: [],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<FiltersProps>) => {
      return { ...state, ...action.payload };
    },
    resetState: () => {
      return { ...initialState };
    },
  },
});

export const { updateState, resetState } = filterSlice.actions;

export default filterSlice.reducer;
