import { UserService } from "../service/user.service";
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import * as userActions from './user.actions';
import { RuleService } from "../service/rule.service";



@Injectable()
export class UserEffects {
    constructor(
        private userApi: UserService,
        private ruleApi: RuleService,
        private actions$: Actions
    ) { }
    
    @Effect()
    loadAction$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.LOAD)
        .switchMap(() => this.userApi.getAllUser()
            .map(res => new userActions.LoadCompletedAction({user: res}))
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );
    

    @Effect()
    loadRule$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.LOAD_RULE)
        .switchMap(() => this.ruleApi.getAllRule()
            .map(res => new userActions.LoadRuleCompletedAction({rule: res}))
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );

    @Effect()
    getUser$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.GET_USER)
        .switchMap((resd) => this.userApi.getUser(resd)
            .map(res => new userActions.LoadGetUserCompletedAction({user: res}))
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );

    @Effect()
    updateUser$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.UPDATE_USER)
        .switchMap((resd) => this.userApi.update(resd)
        .map(res => new userActions.LoadUpdateUserCompletedAction({user: res}))
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );

    @Effect()
    deleteUser$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.DELETE_USER)
        .switchMap((resd) => this.userApi.delete(resd)
        .map(res => new userActions.LoadUDeleteUserCompletedAction({user: res}))
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );


    @Effect()
    createRule$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.CREATE_RULE)
        .switchMap((resd) => this.ruleApi.userCreat(resd)
        .map(res => new userActions.LoadUCreateRuleCompletedAction({user: res}))
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );

    @Effect()
    deleteRule$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.DELETE_RULE)
        .switchMap((resd) => this.ruleApi.delete(resd)
        .map(res => {
            return new userActions.LoadDeleteRuleCompletedAction({ruler: res}) 
        })
            .catch(() => Observable.of({ type: userActions.ActionTypes.LOAD_ERROR }))
    );



}