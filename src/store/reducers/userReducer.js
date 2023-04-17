import actionTypes from "../actions/actionTypes";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isLoggedIn: null,
    userInfo: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isLoggedIn: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            }
        case actionTypes.USER_LOADED_SUCCESS:
            return {
                ...state,
                userInfo: payload
            }
        case actionTypes.AUTHENTICATED_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        case actionTypes.USER_LOADED_FAIL:
            return {
                ...state,
                userInfo: null
            }
        case actionTypes.LOGIN_FAIL:
        case actionTypes.SIGNUP_FAIL:
        case actionTypes.LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.PASSWORD_RESET_SUCCESS:
        case actionTypes.PASSWORD_RESET_FAIL:
        case actionTypes.PASSWORD_RESET_CONFIRM_SUCCESS:
        case actionTypes.PASSWORD_RESET_CONFIRM_FAIL:
        case actionTypes.ACTIVATION_SUCCESS:
        case actionTypes.ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
};