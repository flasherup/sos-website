import React from 'react';
import {Col, Row} from "react-bootstrap";

import './css/Steps.css'

function Step2() {
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
                        TODO reward estimation
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Step2;