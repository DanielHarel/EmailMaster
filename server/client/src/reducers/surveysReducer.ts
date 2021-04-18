/* eslint-disable import/no-anonymous-default-export */
import { ActionTypes, Action } from '../actions/types';

// this is the reducer for the surveys

export default (state = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
};