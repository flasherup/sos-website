// ((Gas used by the address that is claiming) divided by the (total gas used in Etherum since it was made) multiplied by 0.7) PLUS ( (Number of transactions by claim address) divided by the (Total number of transactions) multiplied by 0.3)
import {GAS_MULTIPLIER, TRANSACTION_MULTIPLIER} from "../constants";

export const calculateRewardByTransactions = (txSum:number, totalTxSum:number):number => {
    return txSum/totalTxSum*TRANSACTION_MULTIPLIER;

}

export const calculateRewardByGas = (gasSum:number, totalGasSum:number):number => {
    return gasSum/totalGasSum*GAS_MULTIPLIER;
}