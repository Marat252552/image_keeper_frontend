import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Reducers/MainSlice";

// Создаем rootReducer
const rootReducer = combineReducers({
    mainReducer: MainSlice.reducer
})
// Создаем функцию, в которой конфигурируем redux хранилище
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
// Создаем типы, с помощью которых будем взаимодействовать с нашим хранилищем
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']