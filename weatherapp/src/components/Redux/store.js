import { legacy_createStore ,applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import { weatherReducer } from "./reducer/weatherReducer";

const rootReducer = combineReducers({
    weatherReducer:weatherReducer,
   
})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));