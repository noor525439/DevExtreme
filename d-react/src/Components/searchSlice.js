
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {},   
  applied: {}   
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {

    setSearch(state, action) {
      state.search = { ...state.search, ...action.payload };
    },

    
    applyFilter(state, action) {
      state.applied = { ...state.applied, ...action.payload };
    },

    
    clearSearch(state) {
      state.search = {};
      state.applied = {};
    },

    
    clearApplied(state) {
      state.applied = {};
    },
  },
});

export const { setSearch, applyFilter, clearSearch, clearApplied } =
  searchSlice.actions;

export default searchSlice.reducer;
