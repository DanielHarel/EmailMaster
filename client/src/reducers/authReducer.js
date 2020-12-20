/* eslint-disable import/no-anonymous-default-export */
import {ActionTypes} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
};