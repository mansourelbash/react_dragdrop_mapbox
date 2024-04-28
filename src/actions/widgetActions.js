// widgetActions.js
import { ADD_WIDGET } from './widgetActionTypes';

export const addWidget = (widgetData) => {
  return {
    type: ADD_WIDGET,
    payload: widgetData,
  };
};