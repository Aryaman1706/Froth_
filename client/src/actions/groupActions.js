import axios from 'axios';

import{
    ADD_GROUP,
    LOAD_GROUPS,
    SET_CURRENT
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

// set current
export const setCurrent = (data) => async dispatch => {
    dispatch({
        type: SET_CURRENT,
        payload: data
    })
};