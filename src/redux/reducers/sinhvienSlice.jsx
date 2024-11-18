import { createSlice } from "@reduxjs/toolkit";

const updateList = (list, payload) => {
  const index = list.findIndex((sv) => sv.maSV === payload.maSV);
  if (index !== -1) {
    list[index] = payload;
  }
};

const sinhvienSlice = createSlice({
  name: "sinhvien",
  initialState: {
    listSV: [],
    searchListSV: [],
  },
  reducers: {
    addSV: (state, action) => {
      state.listSV.push(action.payload);
    },
    deleteSV: (state, action) => {
      const filterByMaSV = (sv) => sv.maSV !== action.payload;
      state.listSV = state.listSV.filter(filterByMaSV);
      state.searchListSV = state.searchListSV.filter(filterByMaSV);
    },
    updateSV: (state, action) => {
      updateList(state.listSV, action.payload);
      updateList(state.searchListSV, action.payload);
    },
    searchSV: (state, action) => {
      state.searchListSV = state.listSV.filter(
        (sv) =>
          sv.maSV === action.payload ||
          sv.nameSV === action.payload ||
          sv.phoneSV === action.payload ||
          sv.emailSV === action.payload,
      );
    },
  },
});

export const { addSV, deleteSV, updateSV, searchSV } = sinhvienSlice.actions;
export default sinhvienSlice.reducer;
