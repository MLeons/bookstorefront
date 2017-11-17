import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import bookReducer from "./reducers/bookReducer";
import userReducer from "./reducers/userReducer";
import flashReducer from "./reducers/flashReducer";

export default createStore(
    combineReducers({
        bookReducer,
        userReducer,
        flashReducer
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);