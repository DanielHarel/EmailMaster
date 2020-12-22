import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface FetchUserAction {
    type: ActionTypes.FETCH_USER;
    payload: Object;
}

export interface FetchSurveysAction {
    type: ActionTypes.FETCH_SURVEYS;
    payload: Object;
}

export const fetchUser = () =>
    async (dispatch: Dispatch) => {
        const res = await axios.get('/api/current_user');

        dispatch<FetchUserAction>({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const handleToken = (token: Object) => 
    async (dispatch: Dispatch) => {
        const res = await axios.post('/api/stripe', token);

        dispatch<FetchUserAction>({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const submitSurvey = (values: Object, history: String[]) =>
    async (dispatch: Dispatch) => {
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');

        dispatch<FetchUserAction>({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const fetchSurveys = () => 
    async (dispatch: Dispatch) => {
        const res = await axios.get('/api/surveys');
    
        dispatch<FetchSurveysAction>({ type: ActionTypes.FETCH_SURVEYS, payload: res.data});
    
};