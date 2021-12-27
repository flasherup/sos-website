import React from 'react';
import {Col, Row} from "react-bootstrap";

import './css/Steps.css'

function Step1() {
    return (
        <Row className={'step1'}>
            <Col >
                <Row className={'steps-title'}>
                    <Col >
                        <h4>STEP    1</h4>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h3>CONNECT YOUR WALLET</h3>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        TODO connect button
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Step1;