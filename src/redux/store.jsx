import { configureStore } from "@reduxjs/toolkit";
import sinhvienSlice from "./reducers/sinhvienSlice";
import isEditModeSlice from "./reducers/isEditModeSlice";
export const store = configureStore({
  reducer: {
    sinhvien: sinhvienSlice,
    isEditMode: isEditModeSlice,
  },
});
