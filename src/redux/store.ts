import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit"

const reducer = {

}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>

export default store