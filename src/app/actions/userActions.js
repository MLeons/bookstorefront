import * as flashActions from '../actions/flashActions'


const urlUsers = "http://localhost:3000/api/users/";

export function userRegisterSuccess(userData) {
    return {
        type: "USER_REGISTER",
        payload: userData
    }
}

export function userRegister(credentials) {
    return dispatch => {
        return userRegisterApi(credentials).then(userData => {
            storeUserData(userData.token, userData.user);
            dispatch(userRegisterSuccess(userData));
            if (userData.success)
                dispatch(flashActions.sendFlashMessage(userData.msg, 'alert-success'));
            else
                dispatch(flashActions.sendFlashMessage(userData.msg, 'alert-danger'));
            setTimeout(() => {
                dispatch(flashActions.clearFlashMessage());
            }, 3000);
        }).catch(error => {
            throw (error);
        });
    }
}
export function userRegisterApi(userData) {
    const urlUsersRegister = urlUsers + 'register';
    return fetch(urlUsersRegister, {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// ---

export function userLoginSuccess(userData) {
    return {
        type: "USER_LOGIN",
        payload: userData
    }
}

export function userLogin(credentials) {
    return dispatch => {
        return userLoginApi(credentials).then(userData => {
            storeUserData(userData.token, userData.user);
            dispatch(userLoginSuccess(userData));
            if (userData.success)
                dispatch(flashActions.sendFlashMessage('You have been successfully logged in', 'alert-success'));
            else
                dispatch(flashActions.sendFlashMessage(userData.msg, 'alert-danger'));
            setTimeout(() => {
                dispatch(flashActions.clearFlashMessage());
            }, 3000);
        }).catch(error => {
            throw (error);
        });
    }
}

export function userLoginApi(userData) {
    const urlUsersLogin = urlUsers + 'authenticate';
    return fetch(urlUsersLogin, {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

// --- ---

export function userLogoutSuccess() {
    return {
        type: "USER_LOGOUT",
        payload: {}
    }
}

export function userLogout() {
    return dispatch => {
        removeUserData();
        dispatch(userLoginSuccess());
        dispatch(flashActions.sendFlashMessage('You have been successfully logged out', 'alert-success'));
        setTimeout(() => {
            dispatch(flashActions.clearFlashMessage());
        }, 3000);

    }
}

//--- --

export function userLoginGoogleSuccess(userData) {
    return {
        type: "USER_LOGIN_GOOGLE",
        payload: userData
    }
}

export function userLoginGoogle() {
    return dispatch => {
        return userLoginGoogleApi().then(userData => {
            dispatch(userLoginGoogleSuccess(userData));
        })
    }
}

export function userLoginGoogleApi() {
    const urlUsersLoginGoogle = urlUsers + 'authgoogle';

    return $.getJSON("api/user_data").success(data => {

        return fetch(urlUsersLoginGoogle, {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(data.username),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return new Error(response.status + ' - ' + response.statusText);
            }
        }).then(userData => {
            storeUserData(userData.token, userData.user);
            return userData;
        }).catch(error => {
            return error;
        });
    })
}



//--- --

export function storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserData() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
}

// export default function setAuthorizationToken(token) {
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//     }
// }


//--- --


export function getAuthUserSuccess(userData) {
    return {
        type: "GET_AUTH_USER",
        payload: userData
    }
}

export function getAuthUser() {
    return dispatch => {
        return getAuthUserApi().then(userData => {
            dispatch(getAuthUserSuccess(userData));
        }).catch(error => {
            throw (error);
        });
    }
}

export function getAuthUserApi(userData) {

    return fetch('api/user_data').then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}


// ---