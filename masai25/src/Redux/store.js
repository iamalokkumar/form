

import {reducer as authLogin} from './reducer'

import { legacy_createStore,applyMiddleware,combineReducers } from 'redux'

import thunk from 'redux-thunk'


let storeData=combineReducers({authLogin})
export const store=legacy_createStore(storeData)