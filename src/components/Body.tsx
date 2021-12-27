import React from 'react';
import {Col, Row} from "react-bootstrap";
import './common/css/Section.css'
import Main from "./sections/main/Main";
import Claim from "./sections/claim/Claim";
import Distribution from "./sections/distribution/Distribution";

function Body() {
    return (
        <Row>
            <Col>
                <Row className={'section'}>
                    <Col className={'d-flex justify-content-center'}>
                        <Main/>
                    </Col>
                </Row>
                <Row className={'section section-bkg'}>
                    <Col className={'d-flex justify-content-center'}>
                        <Claim/>
                    </Col>
                </Row>
                <Row className={'section section-bkg'}>
                    <Col className={'d-flex justify-content-center'}>
                        <Distribution/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Body;