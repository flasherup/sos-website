import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import MetamaskSlice from "./metamask/MetamaskSlice";
import DialogsSlice from "./dialogs/DialogsSlice";

export const MainStore = configureStore({
    reducer: {
        metamask: MetamaskSlice,
        dialogs: DialogsSlice,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({
        })
})

setupListeners(MainStore.dispatch)

export type RootState = ReturnType<typeof MainStore.getState>
export type AppDispatch = typeof MainStore.dispatch