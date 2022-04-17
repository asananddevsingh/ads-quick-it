import { connect } from 'react-redux';
import { Counter } from '../presentational';
import { counterActions } from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    currentCount: state && state.counter && state.counter.currentCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCounterIncrement: () => dispatch(counterActions.onCounterIncrement()),
    onCounterDecrement: () => dispatch(counterActions.onCounterDecrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
