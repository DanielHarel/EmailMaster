import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export const fetchUser = () =>
    async (dispatch: Dispatch) => {
        const res = await axios.get('/api/current_user');

        dispatch({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const handleToken = (token: Object) => 
    async (dispatch: Dispatch) => {
        const res = await axios.post('/api/stripe', token);

        dispatch({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const submitSurvey = (values: Object, history: String[]) =>
    async (dispatch: Dispatch) => {
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');

        dispatch({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const fetchSurveys = () => 
    async (dispatch: Dispatch) => {
        const res = await axios.get('/api/surveys');
    
        dispatch({ type: ActionTypes.FETCH_SURVEYS, payload: res.data});
    
};