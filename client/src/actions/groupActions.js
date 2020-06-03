import axios from 'axios';

import{
    ADD_GROUP,
    LOAD_GROUPS
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