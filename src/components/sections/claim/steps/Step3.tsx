import React, {useCallback} from 'react';
import {Button, Col, Row} from "react-bootstrap";

import './css/Steps.css'
import {useAppDispatch} from "../../../../store/Hooks";
import {DIALOG_TYPE_CERTIFICATE} from "../../../../constants";
import { showDialog } from '../../../../store/dialogs/DialogsSlice';

function Step3() {
    const dispatch = useAppDispatch();
    const onClaimClick = useCallback(()=> {
        dispatch(showDialog(DIALOG_TYPE_CERTIFICATE));
    }, [dispatch]);

    return (
        <Row className={'step3'}>
            <Col >
                <Row className={'steps-title'}>
                    <Col >
                        <h4>STEP    3</h4>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h3>INITIATE YOUR CLAIM</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={onClaimClick} className={'sos-button'}>Claim Airdrop</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Step3;