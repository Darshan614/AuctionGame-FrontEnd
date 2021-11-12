import PlayerBoard from './PlayerBoard';
import PlayerList from './PlayerList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './GameZone.module.css';
import Accordion from 'react-bootstrap/Accordion'

function GameZone(props) {
    return (
        <Container className={classes.area}>
            <Row>
                <Col xs={8}>
            <Accordion flush className={classes.accord}>
                <Accordion.Item eventKey="0">
                <Accordion.Header>YOUR TEAM</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>
                                 BATTERS
                                 <ul>
            {props.playerlist.filter((player)=>{
                return player.category=='RIGHT-HAND BATTER' || player.category=='LEFT-HAND BATTER'
            }).map(play=>(
            <li>{play.playername}</li>
            ))}
                                 </ul>
                            </Col>
                            <Col>
                                 BOWLERS
                                {props.playerlist.filter((player)=>{
                                    return player.category=='RIGHT-ARM FAST BOWLER' || player.category=='LEFT-ARM FAST BOWLER'
                                }).map(play=>(
                                <li>{play.playername}</li>
                                ))}
                            </Col>
                            <Col>
                                ALL-ROUNDERS
                                {props.playerlist.filter((player)=>{
                                    return player.category=='ALL-ROUNDER'
                                }).map(play=>(
                                <li>{play.playername}</li>
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Col>
            <Col>
                                <p className={classes.money}>{props.moneyleft}</p>
            </Col>
            </Row>
            <Row>
            <Col><PlayerBoard moneyleft={props.moneyleft} player={props.player} fresh={props.fresh} finalbid={props.finalbid} onbid={props.onbid} currbid={props.currbid} nextbid={props.nextbid} bidder={props.bidder}/></Col>
            </Row>
            
        </Container>
    )
}

export default GameZone;