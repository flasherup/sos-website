import React from 'react';
import {Col, Row} from "react-bootstrap";
import './css/Certificate.css'
import CanvasCertificate from "./canvas/CanvasCertificate";


function Certificate() {
    return(
        <Row>
            <Col className={'full-size-canvas d-flex justify-content-start'}>
                <CanvasCertificate />
            </Col>
        </Row>
    );
}

export default Certificate;