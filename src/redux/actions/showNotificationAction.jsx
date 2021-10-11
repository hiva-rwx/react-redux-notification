import { ADD_NOTIFICATION,REMOVE_NOTIFICATION } from "../type";

export const addNotification = (text, type) => {
  return {
    type: ADD_NOTIFICATION,
    payload: {
      id: Math.floor(Math.random() * 1000) + new Date().getTime(),
      text,
      type,
    },
  };
};

export const removeNotification = (id) => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: { id },
  };
};
