import { browserHistory } from "react-router";

const bookReducer = (state = {
    books: []
}, action) => {

    switch (action.type) {

        case "BOOK_LIST":
            state = {
                ...state,
                books: action.payload
            };
            break;

        case "BOOK_DETAILS":
            state = {
                ...state,
                books: action.payload
            };
            break;

        case "BOOK_ADD":
            browserHistory.push({
                pathname: "/"
            });
            state = {
                ...state,
                books: action.payload
            };
            break;

        case "BOOK_EDIT":
            browserHistory.push({
                pathname: "/"
            });
            state = {
                ...state,
                books: action.payload
            };
            break;

        case "BOOK_DELETE":
            browserHistory.push({
                pathname: "/"
            });
            state = {
                ...state,
                books: action.payload
            };
            break;

    }
    return state;
};

export default bookReducer;