import { ADD_WIDGET } from '../actions/widgetActionTypes';

const initialState = {
  widgets: [],
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        widgets: [...state.widgets, action.payload],
      };
    default:
      return state;
  }
};

export default widgetReducer;
