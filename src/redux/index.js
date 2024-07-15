import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import message from './message/reducer'
import danhMuc from './danhMuc/reducer';
import khoaHoc from './khoaHoc/reducer';

const rootReducer = combineReducers({
  message, danhMuc,khoaHoc
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;