import Top from '../components/Top';
import {Fragment, useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gamerules from "../components/Rules/Gamerules";
import Timer from "../components/Rules/Timer";
import  Router  from 'next/router';

function Rules(){
    setTimeout(()=>{
        Router.push('/GameArea');
    },20000);

    return (<Fragment>
        <Top></Top>
        <Container>
            <Row>
                <Col><Gamerules></Gamerules></Col>
                <Col><Timer></Timer></Col>
            </Row>
        </Container>
    </Fragment>)
}

export default Rules;