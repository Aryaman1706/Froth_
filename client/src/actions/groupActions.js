import axios from 'axios';

import{
    ADD_GROUP,
    LOAD_GROUPS,
    SET_CURRENT,
    SET_INFO,
    GET_WHOLE_GROUP,
    SET_OPEN_GROUP,
    LOAD_MEMBERS,
    ADD_MESSAGE,
    ADD_MESSAGE_STATE
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
    localStorage.setItem('current', JSON.stringify(data));
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

// set open group
export const setOpenGroup = (id) => async dispatch => {
    dispatch({
        type: SET_OPEN_GROUP,
        payload: id
    })
}

// load members
export const loadMembers = (id) => async dispatch => {
    const  res = await axios.get(`/api/user/${id}`);
    dispatch({
        type: LOAD_MEMBERS,
        payload: res.data
    })
};

// add message to state only
export const addMessageState = (data) => async dispatch =>{
    dispatch({
        type: ADD_MESSAGE_STATE,
        payload: data
    });
};

// add message
export const addMessage = ({id, data}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const res = await axios.put(`/api/group/message/${id}`, { message: data } ,config);
    dispatch({
        type: ADD_MESSAGE,
        payload: data
    })
}