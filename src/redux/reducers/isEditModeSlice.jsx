import { createSlice } from "@reduxjs/toolkit";

const isEditModeSlice = createSlice({
  name: "isEditMode",
  initialState: null,
  reducers: {
    setSelectedSV: (state, action) => {
      return action.payload;
    },
    clearSelectedSV: () => null,
  },
});

export const { setSelectedSV, clearSelectedSV } = isEditModeSlice.actions;

export default isEditModeSlice.reducer;
