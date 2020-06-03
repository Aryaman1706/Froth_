import{
    LOAD_USER,
    UPDATE_USER,
    LOGOUT_USER,
    LOAD_MY_GROUPS,
    ADD_GROUP,
    LEAVE_GROUP,
    JOIN_GROUP
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

        // load my groups
        case LOAD_MY_GROUPS:
            return{
                ...state,
                myGroups: [action.payload, ...state.myGroups]
            };

        // create and join
        case ADD_GROUP:
            return{
                ...state,
                myGroups: [action.payload, ...state.myGroups],
                myGroupList: [...state.myGroupList, action.payload._id]
            };

        // leave a group
        case LEAVE_GROUP:
            return{
                ...state,
                myGroups: state.myGroups.filter(
                    x => x._id !== action.payload._id
                ),
                myGroupList : state.myGroupList.filter(
                    x => x !== action.payload._id
                )
            };

        // join group
        case JOIN_GROUP:
            return{
                ...state,
                myGroups: [action.payload, ...state.myGroups],
                myGroupList: [...state.myGroupList, action.payload._id]
            }

        default:
            return state;
    }
}