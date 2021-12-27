import React from 'react';
import {Col, Row} from "react-bootstrap";
import { SECTION_ID_DISTRIBUTION } from '../../../constants';


function Distribution() {
    return (
        <Row id={SECTION_ID_DISTRIBUTION} className={'distribution section-content'}>
            <Col>
                <Row>
                    <Col>
                        <h2>DISTRIBUTION</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>$SOS is grateful to all NFT creators, collectors and markets for nurturing the entire NFT ecosystem. Special thanks go to OpenSea for its leadership in promoting NFT trading. To pay tribute, we have chosen OpenSea collectors to conduct our airdrop.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Distribution;