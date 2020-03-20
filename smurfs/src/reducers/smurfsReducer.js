import {
    FETCH_DATA,
    UPDATE_SMURFS,
    SET_ERROR,
    MAKE_SMURF
} from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    name: '',
    age: '',
    height: '',
    isFetchingData: false,
    error: ""
};

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                smurfs: []
            }
        case UPDATE_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false,
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case MAKE_SMURF:
            return {
                ...state,
            };
        default:
            return state;
    }
};