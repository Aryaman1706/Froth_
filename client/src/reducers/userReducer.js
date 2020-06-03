import{
    LOAD_USER,
    UPDATE_USER,
    LOGOUT_USER
} from '../actions/types';

const initialState = {
    user: null,
    myGroupList: [],
    myGroups: [],
    loading: true,
    isAuthenticated: false
};

export default ( state = initialState, action ) => {
    switch(action.type){
        // load user
        case LOAD_USER:
            return{
                ...state,
                user: action.payload,
                myGroupList: action.payload.groups,
                loading: false,
                isAuthenticated: true
            };
        
        // update user
        case UPDATE_USER:
            return{
                ...state,
                user: action.payload
            };
        
        // logout user
        case LOGOUT_USER:
            return{
                ...state,
                user: null,
                myGroupList: [],
                myGroups: [],
                isAuthenticated: false
            };

        default:
            return state;
    }
}