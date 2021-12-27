export interface EthereumData {
    transactionsNum:number
    gasSum:number
}


export default class NonSerializableStore {
    protected counter = 0;
    protected ethereumData?:EthereumData

    setEthereumData(data:EthereumData):number {
        this.ethereumData = data;
        return this.counter++;
    }

    getEthereumData():EthereumData | undefined {
        return this.ethereumData;
    }
}


export const NSStore = new NonSerializableStore();