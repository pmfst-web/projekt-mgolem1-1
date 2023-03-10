import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import racun from './racunSLice'

const store=configureStore({
    reducer:{
        racun
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;
export const useAppDispatch=()=>useDispatch();


export default store;