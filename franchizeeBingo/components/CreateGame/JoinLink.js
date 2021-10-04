import {Fragment} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./JoinLink.module.css";
import {useState} from "react";

function JoinLink() {
    const [show,setShow] = useState(false);
    return <Fragment>
        <Container>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <div  className={classes.play} onClick={()=>setShow(!show)}>
                        Join through link
                    </div>
                    {show && <form className={classes.form}>
                        <input className={classes.link} type="text" placeholder="Enter Link"></input>
                        <div className={classes.join}>JOIN</div>
                    </form>}
                </Col>
            </Row>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <div  className={classes.play} onClick={()=>setShow(!show)}>
                        Create Game
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
}

export default JoinLink;
