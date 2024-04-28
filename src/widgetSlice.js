import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  widgets: {}, 
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { locationName, widget } = action.payload;
      if (!state.widgets[locationName]) {
        state.widgets[locationName] = []; 
      }
      state.widgets[locationName].push(action.payload); 
    },
    removeWidget: (state, action) => {
      const { locationName, widgetIndex } = action.payload;
      state.widgets[locationName].splice(widgetIndex, 1); 
    },
  },
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
