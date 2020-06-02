import axios from 'axios';

import {
    LOAD_USER
} from './types';

// load user
export const loadUser = () => async dispatch => {
    const res = await axios.get('/api/user/me');
    dispatch({
        type: LOAD_USER,
        payload: res.data
    });
}