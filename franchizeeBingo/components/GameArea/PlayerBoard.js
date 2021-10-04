import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './PlayerBoard.module.css';
import PlayerInfo from '../Player/PlayerInfo';
import PlayerImage from '../Player/PlayerImage';
import TimeBar from './TimeBar';
import CurrentBid from './CurrentBid';
import NextBid from './NextBid';
import Bidbutton from './Bidbutton';
 
function PlayerBoard() {
    return (<Fragment>
        <div>
        <TimeBar />
            <Container className={classes.board}>
                <Row >
                    <Col xs={7}><PlayerInfo /></Col>
                    <Col xs={5}><PlayerImage /></Col>
                </Row>
            </Container>
                <Row >
                    <Col xs={12} md={5}><CurrentBid /></Col>
                    <Col xs={8} md={4}><NextBid /></Col>
                    <Col xs={4} md={3}><Bidbutton /></Col>
                </Row>
        
        </div>
    </Fragment>)
}

export default PlayerBoard;