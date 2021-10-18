import classes from './PlayButton.module.css';
import {Fragment, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from 'next/link';

function PlayButton(){
    return (<Fragment>
        <Container>
            <Row>
                <Col xs={3}></Col>
            <Col xs={6}>
                <Link href='/GameArea'><div className={classes.playbutton} >Start the Game</div></Link>
            </Col>
            </Row>
        </Container>
    </Fragment>)
}

export default PlayButton;