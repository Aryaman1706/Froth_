import axios from 'axios';

import{
    ADD_GROUP,
    LOAD_GROUPS,
    SET_CURRENT,
    SET_INFO,
    GET_WHOLE_GROUP,
    LOAD_MEMBERS
} from './types';

// add group
export const addGroup = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const res = await axios.post(`/api/group`, formData, config);
    dispatch({
        type: ADD_GROUP,
        payload: res.data
    });
};

// load groups
export const loadGroups = () => async dispatch => {
    const res = await axios.get(`/api/group`);
    dispatch({
        type: LOAD_GROUPS,
        payload: res.data
    });
};

// get info
export const setInfo = (data) => async dispatch => {
    dispatch({
        type: SET_INFO,
        payload: data
    })
};

// set current
export const setCurrent = (data) => async dispatch => {
    dispatch({
        type: SET_CURRENT,
        payload: data
    })
};

// get whole group
export const getWholeGroup = (id) => async dispatch => {
    const res = await axios.get(`/api/group/open/${id}`);
    dispatch({
        type: GET_WHOLE_GROUP,
        payload: res.data
    })
};

// load members
export const loadMembers = (id) => async dispatch => {
    const  res = await axios.get(`/api/user/${id}`);
    return res.data;
    // dispatch({
    //     type: LOAD_MEMBERS,
    //     payload: res.data
    // })
};