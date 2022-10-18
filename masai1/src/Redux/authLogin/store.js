

import { legacy_createStore,combineReducers, applyMiddleware } from "redux";

import {reducer as authlogin} from './reducer'

import thunk from 'redux-thunk'

let mainRedux=combineReducers({authlogin})

export let store=legacy_createStore(mainRedux,applyMiddleware(thunk))