import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from './WelcomeBoard.module.css'

function WelcomeBoard() {
    return (
        <Container fluid className={classes.back}>
            <Row className={classes.back}>
                <Col className={classes.Board} sm={{order:'last'}}>Welcome To Franchizee Bingo</Col>
            </Row>
        </Container>
    )
}

export default WelcomeBoard;