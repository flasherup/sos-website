import React from 'react';
import {Col, Row} from "react-bootstrap";
import {SECTION_ID_ABOUT_US} from "../../../constants";
import './css/AboutUs.css'

function AboutUS() {
    return (
        <Row id={SECTION_ID_ABOUT_US} className={'about-us section-content'}>
            <Col className={'p-0'}>
                About US
            </Col>
        </Row>
    );
}

export default AboutUS;