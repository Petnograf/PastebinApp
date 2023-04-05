import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index';

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({
  user: {},
});

export default store;
