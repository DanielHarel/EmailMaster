// export const FETCH_USER = 'fetch_user';
// export const FETCH_SURVEYS = 'fetch_surveys';
import { FetchUserAction, FetchSurveysAction } from './index';

export enum ActionTypes {
    FETCH_USER = 'fetch_user',
    FETCH_SURVEYS = 'fetch_surveys'
}

export type Action = FetchUserAction | FetchSurveysAction;