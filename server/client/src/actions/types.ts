import { FetchUserAction, FetchSurveysAction } from './index';

export enum ActionTypes {
    FETCH_USER = 'fetch_user',
    FETCH_SURVEYS = 'fetch_surveys'
}

export type Action = FetchUserAction | FetchSurveysAction;