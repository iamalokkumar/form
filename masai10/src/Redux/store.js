
import {reducer} from './reducer'
import { legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export let store=legacy_createStore(reducer,applyMiddleware(thunk))

