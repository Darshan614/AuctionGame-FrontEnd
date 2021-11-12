import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from './WelcomeBoard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';


function WelcomeBoard() {
    return (
        <Container fluid className={classes.back}>
            <Row className={classes.back}>
                <Col className={classes.Board} sm={{order:'last'}}><p>Welcome T<FontAwesomeIcon className={classes.ic} icon={faBaseballBall} spin/> Franchizee Bingo</p></Col>
            </Row>
        </Container>
    )
}

export default WelcomeBoard;