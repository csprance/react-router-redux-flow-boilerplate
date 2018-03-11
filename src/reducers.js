import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import example from './features/ExampleFeature/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    example
});

export default rootReducer;
