import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import bookReducer from "./reducers/bookReducer";

export default createStore(
    combineReducers({
        bookReducer
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);