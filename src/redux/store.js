import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/root.reducer";

const middlewares = [logger];

export default createStore(rootReducer, applyMiddleware(...middlewares));