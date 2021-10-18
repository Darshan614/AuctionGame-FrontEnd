import classes from './LinkDisplay.module.css';
import {Fragment} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LinkDisplay(props){
    return <Fragment>
        <Container>
            <Row>
                <Col xs={3}></Col>
            <Col xs={6} > <div className={classes.box}>{props.link}</div></Col> 
        </Row>
        <Row>
                <Col xs={3}></Col>
            <Col xs={6} > <div className={classes.msg}>Share This Code With Other Players</div></Col> 
        </Row>
        </Container>
    </Fragment>
}

export default LinkDisplay;