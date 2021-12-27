import React from 'react';
import {Col, Row} from "react-bootstrap";
import AboutUS from "./sections/aboutUs/AboutUs";
import './common/css/Section.css'

function Body() {
    return (
        <Row>
            <Col>
                <Row className={'section'}>
                    <Col className={'d-flex justify-content-center'}>
                        <AboutUS/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Body;