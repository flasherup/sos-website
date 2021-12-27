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
                    <Col>
                        <h2>CLAIM</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Step1/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Step2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Step3/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Claim;