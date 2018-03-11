// @flow
/**
 * Name: ActionTypes
 * Created by chris on 3/17/2017.
 * Description: Contains all the action types and descriptions of each
 */
import type { Store as ReduxStore, DispatchAPI } from 'redux';

import type { ExampleFeatureState } from '../features/ExampleFeature/state';

// Redux Emits a bunch of it's own stuff so I need to allow those
export type BaseReduxAction = { type: $Subtype<string> };

export type ExampleFeatureAction = {
	type: 'SOME_ACTION',
	payload: string
};

/**
 * AppState Type
 */
export type AppState = {
	example: ExampleFeatureState
};

/**
 * Every action we have in the app
 */
export type Action = BaseReduxAction | ExampleFeatureAction;

// used to dispatch redux actions
export type Dispatch = DispatchAPI<Action | ThunkAction>;

export type Store = ReduxStore<AppState, Action, Dispatch>;

export type GetState = () => AppState;

export type ThunkAction = (dispatch: Dispatch, getState: () => AppState) => any;
