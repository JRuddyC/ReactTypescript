import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import tokenSessionReducer from './slices/tokenSlice'
import personReducer from './slices/personSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'tokenState'],
}

export const rootReducer = combineReducers({
    userState: userReducer,
    tokenState: tokenSessionReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        appReducer: persistedReducer,
        personReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch