import { Action, ActionReducer } from '@ngrx/store';
import { UserAction, ActionTypes } from '../user.actions';

export const ruleReducer: ActionReducer<any[]> = (
        state: any[], action: UserAction) => {

    switch (action.type) {
        case ActionTypes.LOAD_RULE_COMPLETED:
            return [...action.payload.rule];
        case ActionTypes.CREATE_RULE:
            return [state, action.payload.rule];
        case ActionTypes.LOAD_DELETE_RULE_COMPLETED:
            return [state, action.payload];
        default:
            return state;
    }
};
