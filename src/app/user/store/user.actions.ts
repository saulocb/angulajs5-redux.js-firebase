import { Action } from '@ngrx/store';
import { type } from '../../ngrx/util';
import { User } from '../models/user';

export const ActionTypes = {
    LOAD: type('[User] -LOAD Requested-'),
    GET_USER: type('[User] -GET Requested-'),
    UPDATE_USER: type('[User Update] -GET Requested-'),
    GET_LOAD_COMPLETED:  type('[Get User] -LOAD Completed-'),
    UPDATE_LOAD_COMPLETED:  type('[UpdateUser] -LOAD Completed-'),
    DELETE_LOAD_COMPLETED:  type('[Delete User] -LOAD Completed-'),
    DELETE_USER: type('[Delete User] -GET Requested-'),
    LOAD_RULE: type('[RULE] -LOAD Requested-'),
    LOAD_RULE_COMPLETED: type('[Rule] -LOAD Completed-'),
    LOAD_CREATE_RULE_COMPLETED: type('[Rule] -LOAD Create Completed-'),
    CREATE_RULE: type('[Rule] -LOAD Resquested-'), 
    DELETE_RULE: type('[Rule] -LOAD Delete Resquested-'), 
    LOAD_DELETE_RULE_COMPLETED: type('[Rule] -LOAD delete Completed-'), 

    LOAD_COMPLETED: type('[User] -LOAD Completed-'),
    LOAD_ERROR: type('[User] -LOAD Error-'),
    CREATE_COMPLETED: type('[User] -CREATE Completed-'),
    CREATE: type('[User] -CREATE Requested-'),
    CREATE_ERROR: type('[User] -CREATE Error-')

};

//  ***************** action load user  ***************
export class UserPayload {
    constructor(public user: User) { }
}
export class LoadCompletedAction implements Action {
    type = ActionTypes.LOAD_COMPLETED;
    constructor(public payload: UsersPayload) { }
}
export class CreateAction implements Action {
    type = ActionTypes.CREATE;
    constructor(public payload: UserPayload) { }
}

export class UsersPayload {
    constructor(public user: any[]) { }
}

export class LoadAction implements Action {
    type = ActionTypes.LOAD;
    constructor(public payload: any = null) { }
}

//  GET USER
export class GetUserAction implements Action {
    type = ActionTypes.GET_USER;
    constructor(public payload: User = null) { }
}

export class LoadGetUserCompletedAction implements Action {
    type = ActionTypes.GET_LOAD_COMPLETED;
    constructor(public payload: GetUserPayload) { }
}

export class GetUserPayload {
    constructor(public user: User) { }
}

//********************* action update user**************** */
export class UpdateUserAction implements Action {
    type = ActionTypes.UPDATE_USER;
    constructor(public payload: any = null) { }
}

export class LoadUpdateUserCompletedAction implements Action {
    type = ActionTypes.UPDATE_LOAD_COMPLETED;
    constructor(public payload: UpdateUserPayload) { }
}

export class UpdateUserPayload {
    constructor(public user: any) { }
}


//********************* action delete user**************** */
export class DeleteUserAction implements Action {
    type = ActionTypes.DELETE_USER;
    constructor(public payload: any = null) { }
}

export class LoadUDeleteUserCompletedAction implements Action {
    type = ActionTypes.DELETE_LOAD_COMPLETED;
    constructor(public payload: DeleteUserPayload) { }
}

export class DeleteUserPayload {
    constructor(public user: any) { }
}


//********************* action creat rule**************** */
export class CreateRuleAction implements Action {
    type = ActionTypes.CREATE_RULE;
    constructor(public payload: any = null) { }
}

export class LoadUCreateRuleCompletedAction implements Action {
    type = ActionTypes.LOAD_CREATE_RULE_COMPLETED;
    constructor(public payload: CreateRulePayload) { }
}

export class CreateRulePayload {
    constructor(public user: any) { }
}


//********************* action delete rule**************** */
export class DeleteRuleAction implements Action {
    type = ActionTypes.DELETE_RULE;
    constructor(public payload: any = null) { }
}

export class LoadDeleteRuleCompletedAction implements Action {
    type = ActionTypes.LOAD_DELETE_RULE_COMPLETED;
    constructor(public payload: any) { }
}


//  ***************** action load rule  ***************
export class RulesPayload {
    constructor(public rule: any[]) { }
}

export class LoadRule implements Action {
    type = ActionTypes.LOAD_RULE;
    constructor(public payload: any = null) { }
}

export class LoadRuleCompletedAction implements Action {
    type = ActionTypes.LOAD_RULE_COMPLETED;
    constructor(public payload: RulesPayload) { }
}

//  ***************** end action load rule  ***************


export class LoadErrorAction implements Action {
    type = ActionTypes.LOAD_ERROR;
    constructor(public payload: string) { }
}

export class CreateErrorAction implements Action {
    type = ActionTypes.CREATE_ERROR;

    constructor(public payload: string) { }
}

export class CreateCompletedAction implements Action {
    type = ActionTypes.CREATE_COMPLETED;

    constructor(public payload: UserPayload) { }
}

export type UserAction
    = LoadAction
    | LoadRule
    | LoadRuleCompletedAction
    | LoadCompletedAction
    | CreateAction
    | CreateErrorAction
    | CreateCompletedAction
    | GetUserAction
    | UpdateUserAction
    | DeleteUserAction
    | CreateRuleAction
    | DeleteRuleAction

    
    