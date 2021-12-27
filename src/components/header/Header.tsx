import React from 'react';
import {Col, Row} from "react-bootstrap";
import Metamask from "./metamask/Metamask";
import './css/Header.css';

function Header() {
    return (
        <Row className={'header'}>
            <Col className={'d-sm-flex justify-content-end'}>
                <Metamask />
            </Col>
        </Row>
    );
}

export default Header;