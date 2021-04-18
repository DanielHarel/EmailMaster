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
// async that checks the current user via the api
    async (dispatch: Dispatch) => {
        const res = await axios.get('/api/current_user');

        dispatch<FetchUserAction>({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const handleToken = (token: Object) =>
// async that posts the stripe token to the api. upon complition, updates the users credits
    async (dispatch: Dispatch) => {
        const res = await axios.post('/api/stripe', token);

        dispatch<FetchUserAction>({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const submitSurvey = (values: Object, history: String[]) =>
// async that posts a new survey to the api. upon complition, pushes the browser history to '/surveys'
    async (dispatch: Dispatch) => {
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');

        dispatch<FetchUserAction>({type: ActionTypes.FETCH_USER, payload: res.data});
};

export const fetchSurveys = () => 
// async fetching of the surveys associated with the current user. 
    async (dispatch: Dispatch) => {
        const res = await axios.get('/api/surveys');
    
        dispatch<FetchSurveysAction>({ type: ActionTypes.FETCH_SURVEYS, payload: res.data});
    
};