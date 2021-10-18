import classes from './PlayerList.module.css';
import {Fragment, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PlayerList(props){
    const listitems = props.PlayerList.map((player)=>
    <li className={classes.player}>{player.name}</li>
    )
    return (<div>
        <Container>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <div className={classes.players}>PLAYERS</div>
                <ul className={classes.list}>{listitems}</ul>
            </Col>
        </Row>
        </Container>
    </div>)
}

export default PlayerList;