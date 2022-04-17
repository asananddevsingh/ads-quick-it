import { counterActionTypes } from '../actionTypes';

const initialState = { currentCount: 10 };

const counterReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case counterActionTypes.ON_INCREMENT:
      return {
        ...state,
        currentCount: state.currentCount + 1,
      };
    case counterActionTypes.ON_DECREMENT:
      return {
        ...state,
        currentCount: state.currentCount - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
