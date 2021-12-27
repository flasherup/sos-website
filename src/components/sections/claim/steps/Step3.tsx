import React from 'react';
import {Col, Row} from "react-bootstrap";

import './css/Steps.css'

function Step3() {
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
                    <Col >
                        TODO initiate claim button
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Step3;