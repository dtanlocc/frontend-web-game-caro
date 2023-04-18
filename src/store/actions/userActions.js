import { config } from '@fortawesome/fontawesome-svg-core';
import actionTypes from './actionTypes';
import axios from 'axios';
export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.LOGIN_SUCCESS,
    userInfo: userInfo
})

export const userLoginFail = () => ({
    type: actionTypes.LOGIN_FAIL
})

export const logout = () => dispatch => {
    dispatch({
        type: actionTypes.LOGOUT
    });
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/users/me/`, config);
    
            dispatch({
                type: actionTypes.USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: actionTypes.USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: actionTypes.USER_LOADED_FAIL
        });
    }
};

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: actionTypes.AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: actionTypes.AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: actionTypes.AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: actionTypes.AUTHENTICATED_FAIL
        });
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/jwt/create/`, body, config);
        if (res.status === 200) {
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: res.data
        });
        console.log(res.respo)
        alert("Login thành công!!!")
        dispatch(load_user());}
        else {
            // Xử lý khi status không phải là 200 ở đây
            throw new Error(`Lỗi khi gửi yêu cầu đăng nhập: ${res.status} - ${res.data}`);
          }
    } catch (error) {
        const errorMsg = error.response ? error.response.data : 'Lỗi không xác định';
        alert(errorMsg.detail+"\n Vui lòng nhập lại email và password!!");
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            // payload: errorMsg
        })
        
    }
};

export const register = (name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password, re_password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/users/`, body, config);

        dispatch({
            type: actionTypes.SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: actionTypes.SIGNUP_FAIL
        })
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/users/activation/`, body, config);

        dispatch({
            type: actionTypes.ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: actionTypes.ACTIVATION_FAIL
        })
    }
};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/users/reset_password/`, body, config);

        dispatch({
            type: actionTypes.PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: actionTypes.PASSWORD_RESET_FAIL
        });
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/api/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: actionTypes.PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: actionTypes.PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};

export const show_list_room = () => async dispatch => {
    const config ={
        headers :{
            'Content-Type': 'application/json'
        }
    }

    // const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/rooms/list/`, config);
        console.log(res.data)
        return res.data
        

    }catch (err){
        
    }
}
