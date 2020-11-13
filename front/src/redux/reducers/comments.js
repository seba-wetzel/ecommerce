import { ADD_COMMENT, SET_COMMENTS } from "../constants";

const initialState = {
  comment: [],
  comments: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comment: action.payload };
    case SET_COMMENTS:
      return { ...state, comments: action.payload };

    default:
      return state;
  }
};
