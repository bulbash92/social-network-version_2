import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        app:appSlice,
        auth: authSlice,
    }
})

export default store;

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch