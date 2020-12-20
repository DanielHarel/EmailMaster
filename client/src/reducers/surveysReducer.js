/* eslint-disable import/no-anonymous-default-export */
import { ActionTypes } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
};