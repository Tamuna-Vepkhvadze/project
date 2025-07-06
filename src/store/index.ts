import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themaslice from "./sincRedux/appThema"
import getslice from "./asincRedux/getthanks/getslice"
import postSlice from "./asincRedux/postthank/postSlice"

const root = combineReducers({
    appThema: themaslice,
    get: getslice,
    login: postSlice,
})



export const store = configureStore({
    reducer: root
}) 




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
