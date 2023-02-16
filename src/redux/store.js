import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from './reducer/index'

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;