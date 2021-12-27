import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ETHERSCAN_ENDPOINT} from "../../constants";
import {EthereumData, NSStore} from "../NonSerializableStore";

interface TXListResponseTransaction {
    blockHash: string
    blockNumber: string
    confirmations: string
    contractAddress: string
    cumulativeGasUsed: string
    from: string
    gas: string
    gasPrice: string
    gasUsed: string
    hash: string
    input: string
    isError: string
    nonce: string
    timeStamp: string
    to: string
    transactionIndex: string
    txreceipt_status: string
    value: string
}

interface TXListResponse {
    message: string
    result: TXListResponseTransaction[]
    status: string
}

const EtherscanAPI = createApi({
    reducerPath: 'EtherscanAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${ETHERSCAN_ENDPOINT}`}),
    endpoints: (builder) => ({
        getTransactionsData: builder.query<number, string>({
            query: (account:string) => ({
                url:`?module=account&action=txlist&address=${account}&endblock=99999999&sort=asc&apikey=YourApiKeyToken`,
                responseHandler: (response) => response.json(),
            }),
            transformResponse: (response: any) => {
                const parsed = parseEtherscanResponse(response as TXListResponse);
                return NSStore.setEthereumData(parsed)
            },
        }),
    }),
})

export default EtherscanAPI
export const {
    useLazyGetTransactionsDataQuery,
} = EtherscanAPI

const parseEtherscanResponse = (response:TXListResponse):EthereumData => {
    const res = {
        transactionsNum:response.result.length,
        gasSum:0
    }
    response.result.forEach(transaction=> {
        const value = parseInt(transaction.gas)
        res.gasSum += value
    })
    return res;
}
