import axios from 'axios';

import {
    LOAD_USER,
    UPDATE_USER,
    LOGOUT_USER
} from './types';

// load user
export const loadUser = () => async dispatch => {
    const res = await axios.get('/api/user/me');
    if(res.data == "not logined"){
        return;
    };
    dispatch({
        type: LOAD_USER,
        payload: res.data
    });
};

// update user
export const updateUser = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = await axios.put(`/api/user/me`, formData, config);
    dispatch({
        type: UPDATE_USER,
        payload: res.data
    });
};

// logout user
export const logoutUser = () => async dispatch => {
    const res = await axios.get('/api/auth/logout');
    dispatch({
        type: LOGOUT_USER
    });
};