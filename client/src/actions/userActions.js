import axios from 'axios';

import {
    LOAD_USER,
    UPDATE_USER,
    LOGOUT_USER,
    LOAD_MY_GROUPS,
    LEAVE_GROUP,
    JOIN_GROUP
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

// load my groups
export const loadMyGroups = (id) => async dispatch => {
    const res = await axios.get(`/api/group/${id}`);
    dispatch({
        type: LOAD_MY_GROUPS,
        payload: res.data
    })
};

// leave group
export const leaveGroup = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = await axios.put(`/api/group/leave/${id}`, null, config);
    dispatch({
        type: LEAVE_GROUP,
        payload: res.data
    });
};

// join group
export const joinGroup = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = await axios.put(`/api/group/join/${id}`, null, config);
    dispatch({
        type: JOIN_GROUP,
        payload: res.data
    })
}