import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import BannerBG from '../../images/banner-bg.png';

function Background() {
    return (
        <Row>
            <Col className={'d-flex justify-content-start align-items-center'}>
               <Image src={BannerBG}/>
            </Col>
        </Row>
    );
}

export default Background;