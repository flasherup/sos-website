import React, {useCallback, useEffect} from 'react';
import {Button, Image} from "react-bootstrap";
import './css/Metamask.css';
import {useAppDispatch, useAppSelector} from "../../../store/Hooks";
import {RootState} from "../../../store/MainStore";
import {metamaskRequest, METHOD_REQUEST_ACCOUNT} from "../../../store/metamask/MetamaskSlice";
import {OPERATION_NETWORK_CHAIN_ID} from "../../../constants";
import {cutString} from "../../../utils/text";

const METAMASK_STATE_DEFAULT = 'default';
const METAMASK_STATE_CONNECTED = 'connected';
const METAMASK_STATE_PENDING = 'pending';
const METAMASK_STATE_ACCOUNT_ERROR = 'account-error';
const METAMASK_STATE_CHAIN_ID_ERROR = 'chain-id-error';

function Metamask() {
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
            <div className={'metamask metamask-disable d-flex justify-content-start  align-items-center'}>
                <p>Wrong Network</p>
            </div>
        );
    }

    if (state === METAMASK_STATE_CONNECTED) {
        return (
            <div className={'metamask metamask-connected d-flex justify-content-start  align-items-center'}>
                <Image src={ICON_CONNECTED}/><p>{cutString(account, 6, 4)}</p>
            </div>
        );
    }

    if (state === METAMASK_STATE_PENDING) {
        return (
            <div className={'metamask metamask-disable d-flex justify-content-start  align-items-center'}>
                <Image src={ICON_DISCONNECTED}/><p>Connecting...</p>
            </div>
        );
    }

    return (
        <Button onClick={onMetamaskClick} className={'metamask metamask-enable metamask-button d-flex justify-content-start align-items-center'}>
            <Image src={ICON_DISCONNECTED}/><p>Connect wallet</p>
        </Button>
    );
}

const ICON_DISCONNECTED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAipJREFUSEu11smrzXEYx/HXZWMqUxm24pK1hXnKtFHYKCnCf2BjWNhcdnaSkiEyLIiFQijzykoJYWdDLOgiMvW5fX91/ByOc+7x1Omc8/s+3+f9+z7fZ+rxZ+nBXKzELEzFJIxA1j7gFZ7hAa7iPn40M5kNdRmCzdhZjP/lXX5beo59OF4H1kGTcRYL27HeRPcW1pcTDyw3ggK5iymDhFTb49IFFawCxV03y0KXOANmcrKl+F6BtuFwNwkNtrbiaED55BK75bL6+8Z2byDx4+0unOYjXqMfQzEGE5FrmR/QXuzqEPQEB3GleKWeQ8m52fgUUBJtRQeg/diBr/+yN6AXHdzPRaytARaXa0iaDENc+RLXUzmqUpIjtiPzca9hw0lsxOlSUXI3eTa96PQF1LQ2taCOKrUuauPwBp8xvpwkz9fgQrHzvhugsXiLLwWUYhtZh/Pl97uAEo4j2/EbFtVS4gi24FyJ4AmlsKbiR/Z0GgyXsLr2cnNKMU4raQyGG3gYUHIgPaddOYDtxWUt9wbUh90tNZsrJDUO4TKSvN9qaqNLwvYHlFC90yGocVuCIdGXYEjZSQlKFEbmVUX1KaZ1AdbMRGzPqNpEWvex/wTahBMVKN+JjiVdhsXm8hSFxlaespF20dsl2OMS7rm3X2aG/E+incKyQcKuYUMJjgFTzcatPItSetTMNoGPyrh1ptW4VbebwXFVbYAcXsI3pSsdtRogk/gZJJvKT43wbufPxnBfAAAAAElFTkSuQmCC';
const ICON_CONNECTED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAxJJREFUSEu1ls1rVFcUwH/nzkzUmKI1YMxWNBY33QTyoklsiho3grqIIEKl9j9oBTNj6VvMhyLiRqQgWlH8AJV2UWiCBjRqJqGzqkgTolDQjRIXtpnESTP3yM1LMo4TJZOMd/feO/f8zjnvfAkfOoowkNyCSAdKI8IGlHWoViMIaBaRF6iMoGQQ7cGL9iPofCql5KXvG3ZFDqHSNa28nKM8QUjS1HURkSJgMagvWk/4s+sYbStHf4msyj2ydj/bYy9mvxVAfafrqZp4AKxfEmTusowwZltnYQFIfUN62V2MtlYGMqPFedaT+xrftwFoMPEdKucqCplTpofxYhdcjgiDySeVC9l75roE8aINDtKK0rdkb5Rx4CUwBhpCZDVKHYJBaRHS8QRioosCKUOgZxHbjfeji0pxDWX8anLLPMI6IfSnejC6s2yQ6ine/H+Udn9qIXdd9T8t//+Y3/CO7i0CpFNfobQith6R5cA4lueE7B2ajmWEdDKLUL0QqwqJRAvN0Ydzz+nEZUQOolwlkusiF6ojFLkMuikoHxN3Hs3bmz4Kfh2poeNIdlqm21/DqqpRkByjuVp2+y4poP/EHkz+1wDEv4sDrYjU8OUM6H7qc8L6CpVJ/gvXzhmQPrEPyd8KQPJaGEi5dFxZVujydhtbjxVKYiB1HvRbLDcx+SgaWgtcLDRl89PikkH5nebo7iLjBpPNWG0jJG6ULAcZB3mO2l682F8O1A10lOVREPczPJv8nk5/ciF3hXQqjmhsIcIlMspTlJ8JT/3BP4+G6LyRL5LJHF9FHg9rx4SBeAuY+4sCFV+aRGUUIYuqmW5BaO20iLVbZ5pqahh0YwVg86iQYbyuL4IxkU4cQuSXTwIS/Yam2KWZwacuzXsR2isKU3rxojvcwlIY5XcSddSIq42GysDkbyYibbT/MOr0FS8nD0+uxUxdQXT7kmDKbd5UHZiFlIKC+hD+TB3AqptRm8sDymOsTbIldu392VS6172reTDeiDW7UGnEaLBAiqxArUGMa10vQUbIa4aw7Xbj4EOGvQVDGilinkQfWAAAAABJRU5ErkJggg==';

export default Metamask;