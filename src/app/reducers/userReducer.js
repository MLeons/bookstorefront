import { browserHistory } from "react-router";

const userReducer = (state = {
    session: {}
}, action) => {

    switch (action.type) {

        case "USER_REGISTER":
            browserHistory.push({
                pathname: "/login"
            });
            state = {
                ...state,
                session: action.payload
            };
            break;

        case "USER_LOGIN":
            browserHistory.push({
                pathname: "/"
            });
            state = {
                ...state,
                session: action.payload
            };
            break;

        case "USER_LOGOUT":
            browserHistory.push({
                pathname: "/"
            });
            state = {
                ...state,
                session: action.payload
            };
            break;

        case "USER_LOGIN_GOOGLE":
            browserHistory.push({
                pathname: "/"
            });
            window.location.reload();
            state = {
                ...state,
                session: action.payload
            };
            break;

        case "GET_AUTH_USER":
            state = {
                ...state,
                session: action.payload
            };
            break;

    }
    return state;
};

export default userReducer;