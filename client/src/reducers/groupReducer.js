import{
    LOAD_GROUPS,
    JOIN_GROUP,
    LEAVE_GROUP,
    SET_CURRENT
} from '../actions/types';

const initialState = {
    group_loading: true,
    groups: [],
    current: null
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
            
        default:
            return state;
    }
}