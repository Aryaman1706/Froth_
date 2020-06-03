import{
    ADD_GROUP,
    LOAD_GROUPS
} from '../actions/types';

const initialState = {
    group_loading: true,
    groups: [],
    current: null
};

export default ( state = initialState, action ) => {
    switch(action.type){
        
        // add group
        case ADD_GROUP:
            return{
                ...state,
                groups: [action.payload, ...state.groups]
            };
        
        // load groups
        case LOAD_GROUPS:
            return{
                ...state,
                groups: action.payload,
                group_loading: false
            };

        default:
            return state;
    }
}