import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import bookReducer from "./reducers/bookReducer";
import userReducer from "./reducers/userReducer";

export default createStore(
    combineReducers({
        bookReducer,
        userReducer
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);