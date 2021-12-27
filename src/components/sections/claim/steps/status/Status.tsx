import React, {useCallback, useEffect} from 'react';
import {Button} from "react-bootstrap";
import './css/Status.css';
import {useAppDispatch, useAppSelector} from "../../../../../store/Hooks";
import {metamaskRequest, METHOD_REQUEST_ACCOUNT} from '../../../../../store/metamask/MetamaskSlice';
import {OPERATION_NETWORK_CHAIN_ID} from "../../../../../constants";
import {cutString} from "../../../../../utils/text";
import { RootState } from '../../../../../store/MainStore';

const METAMASK_STATE_DEFAULT = 'default';
const METAMASK_STATE_CONNECTED = 'connected';
const METAMASK_STATE_PENDING = 'pending';
const METAMASK_STATE_ACCOUNT_ERROR = 'account-error';
const METAMASK_STATE_CHAIN_ID_ERROR = 'chain-id-error';

function Status() {
    const {account, chainID, metamaskStatus} = useAppSelector((state: RootState) => state.metamask);
    const [state, setState] = React.useState<string>(METAMASK_STATE_DEFAULT);

    const dispatch = useAppDispatch();

    const onMetamaskClick = useCallback(() => {
        dispatch(metamaskRequest({method:METHOD_REQUEST_ACCOUNT}));
    }, []);

    useEffect(() => {
        if (metamaskStatus === 'pending') {
            setState(METAMASK_STATE_PENDING);
        } else if (!account) {
            setState(METAMASK_STATE_ACCOUNT_ERROR);
        } else if (chainID !== OPERATION_NETWORK_CHAIN_ID) {
            setState(METAMASK_STATE_CHAIN_ID_ERROR);
        } else if (account) {
            setState(METAMASK_STATE_CONNECTED);
        } else {
            setState(METAMASK_STATE_DEFAULT);
        }
    }, [account, chainID, metamaskStatus]);

    if (state === METAMASK_STATE_CHAIN_ID_ERROR) {
        return (
            <div className={'d-flex justify-content-start  align-items-center'}>
                <p>Wrong Network</p>
            </div>
        );
    }

    if (state === METAMASK_STATE_CONNECTED) {
        return (
            <div className={'d-flex justify-content-start  align-items-center'}>
                <p>{cutString(account, 6, 4)}</p>
            </div>
        );
    }

    if (state === METAMASK_STATE_PENDING) {
        return (
            <div className={'d-flex justify-content-start  align-items-center'}>
                <p>Connecting...</p>
            </div>
        );
    }

    return (
        <Button onClick={onMetamaskClick} className={'metamask metamask-enable metamask-button d-flex justify-content-start align-items-center'}>
            <p>Connect wallet</p>
        </Button>
    );
}
export default Status;