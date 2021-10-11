import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../type";

const initialState = [];

export const showNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [
        {
          id: action.payload.id,
          text: action.payload.text,
          type: action.payload.type,
        },
        ...state,
      ];
    case REMOVE_NOTIFICATION:
      return state.filter((note) => note.id !== action.payload.id);

    default:
      return state;
  }
};
