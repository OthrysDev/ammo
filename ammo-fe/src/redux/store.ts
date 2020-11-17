import { createStore } from 'redux';
import customReducer from 'redux/reducers/ReducerExample';

const store = createStore(customReducer);

export default store;
