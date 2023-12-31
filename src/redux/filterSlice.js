import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filter',
  initialState: " ",
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;