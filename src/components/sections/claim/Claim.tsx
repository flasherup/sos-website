import React from 'react';
import {Col, Row} from "react-bootstrap";
import { SECTION_ID_CLAIM } from '../../../constants';

import './css/Claim.css';
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

function Claim() {
    return (
        <Row id={SECTION_ID_CLAIM} className={'claim section-content'}>
            <Col>
                <Row>
                    <Col className={'d-flex justify-content-center'}>
                        <h2>CLAIM</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Step1/>
                    </Col>
                    <Col md={6}>
                        <Step2/>
                    </Col>
                    <Col md={3}>
                        <Step3/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Claim;