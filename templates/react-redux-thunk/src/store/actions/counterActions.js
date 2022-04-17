import { counterActionTypes } from '../actionTypes';

const onCounterIncrement = () => {
  return {
    type: counterActionTypes.ON_INCREMENT,
  };
};

const onCounterDecrement = () => {
  return {
    type: counterActionTypes.ON_DECREMENT,
  };
};

export default {
  onCounterIncrement,
  onCounterDecrement,
};
