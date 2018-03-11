// @flow
/**
 * Name: exampleFeatureReducer
 * Author: Chrissprance
 * Creation Date: 1/18/2018
 * Description: A redux reducer for ExampleFeature
 */
import type { Action } from '../../constants/ActionTypes';

import type { ExampleFeatureState } from './state';
import initialState from './state';

export default function exampleFeature(
	state: ExampleFeatureState = initialState,
	action: Action
): ExampleFeatureState {
	switch (action.type) {
		case 'SOME_ACTION':
			return {...state, foo: action.payload};
		default:
			return state;
	}
}
