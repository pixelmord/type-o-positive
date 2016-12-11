import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps(state) {
  return {
    keyMap: state.keyMap,
    settings: state.settings
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Root = connect(mapStateToProps, mapDispachToProps)(App);

export default Root;
