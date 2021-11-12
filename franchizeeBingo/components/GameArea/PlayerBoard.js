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
 
function PlayerBoard(props) {
    return (<Fragment>
        <div>
        <TimeBar fresh={props.fresh} finalbid={props.finalbid} />
            <Container className={classes.board}>
                <Row >
                    {/* <Col xs={7}><PlayerInfo player={props.player}/></Col> */}
                    <Col><PlayerImage player={props.player}/></Col>
                </Row>
            </Container>
                <Row >
                    <Col xs={12} md={5}><CurrentBid currbid={props.currbid} bidder={props.bidder}/></Col>
                    <Col xs={8} md={4}><NextBid nextbid={props.nextbid}/></Col>
                    <Col xs={4} md={3}><Bidbutton nextbid={props.nextbid} moneyleft={props.moneyleft} onbid={props.onbid}/></Col>
                </Row>
        
        </div>
    </Fragment>)
}

export default PlayerBoard;