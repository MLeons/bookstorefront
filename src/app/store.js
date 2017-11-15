import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import book from "./reducers/bookReducer";

export default createStore(
    combineReducers({
        book
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);