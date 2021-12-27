import {useAppDispatch, useAppSelector} from "../store/Hooks";
import {useEffect} from "react";
import {
    OPERATION_NETWORK_CHAIN_ID,
} from "../constants";
import {RootState} from "../store/MainStore";
import { useLazyGetTransactionsDataQuery } from "../store/etherscan/EtherscanAPI";
import {isFulfilled} from "../utils/matchers";
import {NSStore} from "../store/NonSerializableStore";
import {calculateRewardByGas, calculateRewardByTransactions} from "../utils/rewardCalculations";
import {setGasSum, setIsRewardCalculated, setTGasReward, setTransactionReward, setTransactionsCount } from "../store/reward/RewardSlice";

export function RewardsCalculation() {
    const {account, signature, metamaskStatus, chainID} = useAppSelector((state: RootState) => state.metamask);
    const [getEtherTransactionsData, transactionsDataResult] = useLazyGetTransactionsDataQuery({});
    const dispatch = useAppDispatch();

    //On init show dialog
    useEffect(() => {
        if (account && chainID === OPERATION_NETWORK_CHAIN_ID) {
            getEtherTransactionsData(account)
        }
    },[account, chainID]);

    useEffect(() => {
        console.log('isFulfilled(transactionsDataResult)', isFulfilled(transactionsDataResult));
        if (isFulfilled(transactionsDataResult)) {
            const etherData = NSStore.getEthereumData();
            console.log('etherData', etherData);
            if (etherData) {
                dispatch(setTransactionsCount(etherData.transactionsNum));
                const tr = calculateRewardByTransactions(etherData.transactionsNum, 1);
                dispatch(setTransactionReward(tr));

                dispatch(setGasSum(etherData.gasSum));
                const gw = calculateRewardByGas(etherData.gasSum, 1);
                dispatch(setTGasReward(gw));

                dispatch(setIsRewardCalculated(true));
            } else {
                setIsRewardCalculated(false)
            }
        } else {
            console.log('transactions data in progress')
        }
    },[transactionsDataResult]);
}