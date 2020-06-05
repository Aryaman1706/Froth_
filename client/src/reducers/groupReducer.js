import{
    LOAD_GROUPS,
    JOIN_GROUP,
    LEAVE_GROUP,
    SET_CURRENT,
    SET_INFO,
    GET_WHOLE_GROUP,
    SET_OPEN_GROUP,
    LOAD_MEMBERS
} from '../actions/types';

const initialState = {
    group_loading: true,
    groups: [],
    info: null,
    current: null,
    wholeGroup: null,
    openGroup: null,
    members: []
};

export default ( state = initialState, action ) => {
    switch(action.type){
        
        // load groups
        case LOAD_GROUPS:
            return{
                ...state,
                groups: action.payload,
                group_loading: false
            };

        // join group
        case JOIN_GROUP:
            return{
                ...state,
                groups: state.groups.filter(
                    x => x._id !== action.payload._id
                )
            };

        // leave group
        case LEAVE_GROUP:
            return{
                ...state,
                groups: [action.payload, ...state.groups]
            };

        // set current
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            };

        case SET_INFO:
            return{
                ...state,
                info: action.payload
            };
            
        // get whole group
        case GET_WHOLE_GROUP:
            return{
                ...state,
                wholeGroup: action.payload,
                members: []
            };

        // set open group
        case SET_OPEN_GROUP:
            return{
                ...state,
                openGroup: action.payload
            };

        case LOAD_MEMBERS:
            return{
                ...state,
                members: [...state.members, action.payload]
            };

        default:
            return state;
    }
}