import classes from './PlayButton.module.css';
import {Fragment, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from 'next/link';

function PlayButton(props){
    const startgame = () => {
        props.onplay(props.gamelink);
    }

    return (<Fragment>
        <Container>
            <Row>
                <Col xs={3}></Col>
            <Col xs={6}>
                <div onClick={startgame} className={classes.playbutton} >Start the Game</div>
            </Col>
            </Row>
        </Container>
    </Fragment>)
}

export default PlayButton;