import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";

import './css/Steps.css'
import {useLazyGetTransactionsDataQuery} from "../../../../store/etherscan/EtherscanAPI";
import {NSStore} from "../../../../store/NonSerializableStore";
import {GAS_MULTIPLIER, TRANSACTION_MULTIPLIER} from "../../../../constants";
import {useAppSelector} from "../../../../store/Hooks";
import {RootState} from "../../../../store/MainStore";
import {isFulfilled} from "../../../../utils/matchers";

function Step2() {
    const {transactionReward, gasReward, transactionsCount, gasSum} = useAppSelector((state: RootState) => state.reward);

    return (
        <Row className={'step2'}>
            <Col >
                <Row className={'steps-title'}>
                    <Col >
                        <h4>STEP    2</h4>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h3>ESTIMATE YOUR REWARD</h3>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Row>
                            <Col>
                                <h5># of transactions</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Row>
                                <Col>
                                    <p>Transactions</p>
                                </Col>
                                <Col>
                                    <p>{transactionsCount}</p>
                                </Col>
                            </Row>
                            <Col>
                                <p>Multiplier</p>
                            </Col>
                            <Col>
                                <p>{TRANSACTION_MULTIPLIER}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Sub-total</p>
                            </Col>
                            <Col>
                                <p>{transactionReward}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col>
                                <h5>$$ Gas spend</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>ETH</p>
                            </Col>
                            <Col>
                                <p>{gasSum}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Multiplier</p>
                            </Col>
                            <Col>
                                <p>{GAS_MULTIPLIER}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Sub-Total</p>
                            </Col>
                            <Col>
                                <p>{gasReward}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>$SOS reward</p>
                    </Col>
                    <Col>
                        <p>{transactionReward + gasReward}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Step2;