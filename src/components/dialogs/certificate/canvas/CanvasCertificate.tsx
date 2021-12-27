import React, {MouseEventHandler, MutableRefObject, RefObject, useCallback, useEffect, useRef, useState} from 'react';
import {Button, Col, Image as BSImage, Row} from "react-bootstrap";
import Certificate from '../../../../images/CertificateMock.png'

const IMAGE_WIDTH = 639;
const IMAGE_HEIGHT = 1134;

function CanvasCertificate() {
    const [imgSrc, setImageSrc] = useState<string>();

    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = IMAGE_WIDTH;
        canvas.height = IMAGE_HEIGHT;
        const context = canvas.getContext("2d");
        const drawing = new Image();
        drawing.onload = function () {
            if (context) {
                context.drawImage(drawing, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
                const date = new Date()
                fillCanvas(context, date.getFullYear(), 200);
            }
            setImageSrc(canvas.toDataURL())
        };
        drawing.src = Certificate;
    }, [])

    return (
        <Row>
            <Col>
                <Row>
                    <Col className={'certificate-image'}>
                        <BSImage src={imgSrc}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'certificate-button'}>
                        <a href={imgSrc} download="certificate.png" className={'btn sos-button'}><p>DOWNLOAD</p></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

const fillCanvas = (context:CanvasRenderingContext2D, year:number, gasUsed:number) => {
    //Year
    context.font = "900 90px Montserrat";
    context.fillStyle = "#1EFF68";
    context.fillText(year.toString(), 350, 325);

    //Etherum gas used
    context.font = "700 18px Montserrat";
    context.fillStyle = "#1EFF68";
    context.fillText(gasUsed.toString(), 277, 399);

    //Number of transactions
    context.fillText(gasUsed.toString(), 320, 436);

    //Gwei used
    context.fillText(gasUsed.toString(), 202, 474);

    //Spend Text
    context.font = "500 18px Dosis";
    context.fillStyle = "#FFFFFF";
    context.fillText(`You spend more gas than ${99.9}% of the`, 75, 529);
    context.fillText('people using Ethereum.', 75, 559);
    context.fillText('Keep up the trading!', 75, 589);

    //Bottom
    let startX = 75;
    let space = 5;
    context.font = "500 24px Dosis";
    context.fillStyle = "#FFFFFF";
    context.fillText('You spend', startX, 759);
    startX += context.measureText('You spend').width + space;
    context.fillStyle = "#7EEBC6";
    context.fillText(gasUsed.toString(), startX, 759);
    startX += context.measureText(gasUsed.toString()).width + space;
    context.fillText('ETH', startX, 759);

    startX = 75;
    context.fillStyle = "#FFFFFF";
    context.fillText('The first transaction was in', startX, 799);
    startX += context.measureText('The first transaction was in').width + space;
    context.fillStyle = "#7EEBC6";
    context.fillText('2020-05-06', startX, 799);


    //Paid
    startX = 55;
    space = 10;
    context.font = "800 42px Montserrat";
    context.fillStyle = "#7EEBC6";
    context.fillText(gasUsed.toString(), startX, 935);
    startX += context.measureText(gasUsed.toString()).width + space;

    context.font = "800 21px Montserrat";
    context.fillStyle = "#FFFFFF";
    context.fillText('ETH in gass fee', startX, 935);


    startX = 55;
    context.font = "800 42px Montserrat";
    context.fillStyle = "#7EEBC6";
    context.fillText(`$${gasUsed.toString()}K`, startX, 990);
    startX += context.measureText(`$${gasUsed.toString()}K`).width + space;

    context.font = "800 21px Montserrat";
    context.fillStyle = "#FFFFFF";
    context.fillText('of transaction fee', startX, 990);
}

export default CanvasCertificate;