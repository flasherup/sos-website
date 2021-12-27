import React from 'react';
import {Col, Row} from "react-bootstrap";
import './css/Footer.css'

function Footer() {
    return (
        <Row className={'footer'}>
            <Col>
                <Row>
                    <Col lg={4} md={5} className={'footer-logo d-flex justify-content-start align-items-center'}>
                        © 2021 by SOS
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Footer;