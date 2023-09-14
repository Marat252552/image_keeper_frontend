import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Reducers/MainSlice";


const rootReducer = combineReducers({
    mainReducer: MainSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']