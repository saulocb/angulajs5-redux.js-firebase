import { Action, ActionReducer } from '@ngrx/store';
import { UserAction, ActionTypes } from '../user.actions';
import { AnonymousSubject } from 'rxjs/Subject';
import { User } from '../../models/user';

export const userReducer: ActionReducer<any[]> = (
        state: any[] = [], action: UserAction) => {

    switch (action.type) {
        case ActionTypes.LOAD_COMPLETED:
            return [...action.payload.user];  //saulo - I must to see this code again, because I don't know yet, if that is the best way to do it.
        case ActionTypes.LOAD_RULE_COMPLETED:
            return [state, ...action.payload.rule];
        case ActionTypes.GET_LOAD_COMPLETED:
            return [state, ...action.payload.user];    
        case ActionTypes.UPDATE_USER:
            return [state, action.payload.user];   
        case ActionTypes.DELETE_USER:
            return [state, action.payload.user];   
        default:
            return state;
    }
};
