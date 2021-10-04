import classes from './PlayerList.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let playerlist = [{ name: "MS DHONI", cost: 100, key:1 }, { name: "RITURAJ GAIKWAD", cost: 95, key:2 }, { name: "SURESH RAINA", cost: 99, key:3 }];

function PlayerList() {
    return (
        <div>
            <div className={classes.heading}>Your Players</div>
            <Container>
                {playerlist.map((player) => <Row key={player.name} className={classes.player}>
                    <Col xs={9}><div className={classes.playername}>{player.name}</div></Col>
                    <Col xs={3}><div className={classes.playercost}>{player.cost}</div></Col>
                </Row>
                )}
            </Container>

        </div>
    )
}

export default PlayerList;