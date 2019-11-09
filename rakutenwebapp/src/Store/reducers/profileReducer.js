import {GET_PROFILE, GET_CURRENT_PROFILE,PROFILE_LOADING} from '../actions/types';
// import isEmpty from '../validation/is-empty';

const initialState={
        currProfile:null,
        profiles:null,
        loading:false,
        othProfile:null
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_CURRENT_PROFILE:
            return {
                ...state,
                currProfile:action.payload,
                loading:false
            }
        case GET_PROFILE:
            return {
                ...state,
                othProfile:action.payload,
                loading:false
            }
        case PROFILE_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}