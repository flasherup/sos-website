import {useAppDispatch, useAppSelector} from "../store/Hooks";
import {useEffect} from "react";
import {
    metamaskRequest,
    METHOD_ACCOUNTS,
    METHOD_CHAIN_ID,
    setAccount,
    setChainID
} from "../store/metamask/MetamaskSlice";
import { showDialog, hideDialog } from "../store/dialogs/DialogsSlice";
import {
    DIALOG_TYPE_METAMASK_CONNECTION,
} from "../constants";
import {RootState} from "../store/MainStore";

type WindowInstanceWithEthereum = Window &
    typeof globalThis & { ethereum?: any };

const ethereum = (window as WindowInstanceWithEthereum).ethereum;

export function MetamaskInitialisation() {
    const dispatch = useAppDispatch();
    const {account, signature, metamaskStatus, chainID} = useAppSelector((state: RootState) => state.metamask);


    //On init show dialog
    useEffect(() => {
        if (ethereum && ethereum.isConnected) {
            console.log('ethereum.selectedAddress', ethereum.selectedAddress);
            ethereum.on('connect', function (connectInfo:any){
                console.log('connect', connectInfo);
            });

            ethereum.on('chainChanged', (chainId:any) => {
                console.log('chainChanged', chainId);
                dispatch(setChainID(chainId));
            });

            ethereum.on('accountsChanged', function (accounts:string[]) {
                const newAccount = accounts.length > 0?accounts[0]:undefined;
                if (newAccount)dispatch(setAccount(newAccount));
            });
            dispatch(showDialog(DIALOG_TYPE_METAMASK_CONNECTION));
            dispatch(metamaskRequest({method:METHOD_ACCOUNTS}));
            dispatch(metamaskRequest({method:METHOD_CHAIN_ID}));
        } else {
            console.log('disconnected');
        }
    },[]);

    useEffect(() => {
        if (metamaskStatus !== 'pending') {
            dispatch(hideDialog());
        }
    },[dispatch, metamaskStatus]);
}