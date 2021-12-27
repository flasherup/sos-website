import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface DialogsState {
    isCalculated: boolean
    transactionsCount:number
    transactionReward:number
    gasSum:number
    gasReward:number
}

const initialState: DialogsState = {
    isCalculated: false,
    transactionReward:0,
    gasReward:0
} as DialogsState;

export const RewardSlice = createSlice({
    name: 'reward',
    initialState,
    reducers: {
        setIsRewardCalculated: (state, action: PayloadAction<boolean>) => {
            state.isCalculated = action.payload;
        },
        setTransactionsCount: (state, action: PayloadAction<number>) => {
            state.transactionsCount = action.payload;
        },
        setTransactionReward: (state, action: PayloadAction<number>) => {
            state.transactionReward = action.payload;
        },
        setGasSum: (state, action: PayloadAction<number>) => {
            state.gasSum = action.payload;
        },
        setTGasReward: (state, action: PayloadAction<number>) => {
            state.gasReward = action.payload;
        },
    },
})

export const { setTransactionReward, setTransactionsCount, setTGasReward, setGasSum, setIsRewardCalculated } = RewardSlice.actions
export default RewardSlice.reducer