const urlUsers = "http://localhost:3000/api/users/";

export function userRegisterSuccess(credentials) {
    return {
        type: "USER_REGISTER",
        payload: credentials
    }
}

export function userRegister(credentials) {
    return dispatch => {
        return userRegisterApi().then(credentials => {
            dispatch(userRegisterSuccess(credentials));
        }).catch(error => {
            throw (error);
        });
    }
}

export function userRegisterApi(credentials) {
    return fetch(urlUsers).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function userLoginSuccess(credentials) {
    return {
        type: "USER_LOGIN",
        payload: credentials
    }
}

export function userLogin(credentials) {
    return dispatch => {
        return userLoginApi().then(credentials => {
            dispatch(userLoginSuccess(credentials));
        }).catch(error => {
            throw (error);
        });
    }
}

export function userLoginApi(credentials) {
    return fetch(urlUsers).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function userLogoutSuccess(credentials) {
    return {
        type: "USER_LOGOUT",
        payload: credentials
    }
}

export function userLogout(credentials) {
    return dispatch => {
        return userLoginApi().then(credentials => {
            dispatch(userLoginSuccess(credentials));
        }).catch(error => {
            throw (error);
        });
    }
}

export function userLogoutApi(credentials) {
    return fetch(urlUsers).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}
