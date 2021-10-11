import { combineReducers } from "redux";
import { showNotificationReducer } from "./showNotificationReducer";

export const reducer = combineReducers({
  notification: showNotificationReducer,
});
