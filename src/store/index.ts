import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import personReducer from './slices/personSlice'
import userRoleReducer from './slices/userRoleSlice'
import uiReducer from './slices/uiSlice'
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import tokenReducer from './slices/tokenSlice'
import peopleReducer from './slices/peopleSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'tokenState'],
}

export const rootReducer = combineReducers({
    userState: userReducer,
    tokenState: tokenReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        appReducer: persistedReducer,
        personReducer,
        userRoleReducer,
        uiReducer,
        peopleReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
