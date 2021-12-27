import React from 'react';
import {Col, Row} from "react-bootstrap";
import Metamask from "./metamask/Metamask";
import './css/Header.css';

function Header() {
    return (
        <Row className={'header'}>
            <Col className={'header-buttons d-none d-sm-flex justify-content-xl-end justify-content-md-center justify-content-sm-start'}>
                <Metamask />
            </Col>
        </Row>
    );
}

export default Header;