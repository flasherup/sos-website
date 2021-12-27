import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import MetamaskSlice from "./metamask/MetamaskSlice";
import DialogsSlice from "./dialogs/DialogsSlice";
import EtherscanAPI from "./etherscan/EtherscanAPI";
import RewardSlice from "./reward/RewardSlice";

export const MainStore = configureStore({
    reducer: {
        metamask: MetamaskSlice,
        dialogs: DialogsSlice,
        reward: RewardSlice,
        [EtherscanAPI.reducerPath]: EtherscanAPI.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({
        })
            .concat(EtherscanAPI.middleware)
})

setupListeners(MainStore.dispatch)

export type RootState = ReturnType<typeof MainStore.getState>
export type AppDispatch = typeof MainStore.dispatch