import PlayerBoard from './PlayerBoard';
import PlayerList from './PlayerList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './GameArea.module.css';

function GameArea() {
    return (
        <Container className={classes.area}>
            <Row>
                <Col xs={4}><PlayerList /></Col>
                <Col xs={8}><PlayerBoard /></Col>
            </Row>
        </Container>
    )
}

export default GameArea;