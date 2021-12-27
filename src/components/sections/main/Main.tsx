import React from 'react';
import {Col, Button, Row} from "react-bootstrap";
import {SECTION_ID_MAIN} from "../../../constants";
import './css/Main.css'
import SocialNetworks from "../../common/SocialNetworks";

function Main() {
    return (
        <Row id={SECTION_ID_MAIN} className={'main section-content'}>
            <Col>
                <Row >
                    <Col className={'main-title'}>
                        <h1>Introducing $SOS</h1>
                    </Col>
                </Row>
                <Row >
                    <Col className={'main-text d-flex justify-content-center  align-items-center'}>
                        <p>The token for the largest NFT community, to pay tribute, to protect, to promote...</p>
                    </Col>
                </Row>
                <Row >
                    <Col className={'main-text d-flex justify-content-center  align-items-center'}>
                        <Button className={'sos-button'}>Initiate Claim</Button>
                    </Col>
                </Row>
                <Row >
                    <Col className={'main-text d-flex justify-content-center  align-items-center'}>
                        <SocialNetworks/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Main;