import { browserHistory } from "react-router";

const userReducer = (state = {
    session: ''
}, action) => {

    switch (action.type) {

        case "USER_LOGIN":
            state = {
                ...state,
                books: action.payload
            };
            break;

        case "USER_REGISTER":
            state = {
                ...state,
                books: action.payload
            };
            break;

        case "USER_LOGOUT":
            state = {
                ...state,
                books: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;