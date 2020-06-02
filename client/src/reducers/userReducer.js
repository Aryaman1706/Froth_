import{
    LOAD_USER
} from '../actions/types';

const initialState = {
    user: null,
    myGroupList: [],
    myGroups: [],
    loading: true
}

export default ( state = initialState, action ) => {
    switch(action.type){
        // load user
        case LOAD_USER:
            return{
                ...state,
                user: action.payload,
                myGroupList: action.payload.groups,
                loading: false
            };

        default:
            return state;
    }
}