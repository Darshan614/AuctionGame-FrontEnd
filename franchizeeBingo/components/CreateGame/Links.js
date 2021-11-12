import {Fragment, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./JoinLink.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Links(props) {
    const [showjoinLink,setshowjoinLink] = useState(true);

    const [link,setlink] = useState();
    const createGame = () => {
        setshowjoinLink(false);
        props.createGameAPI();
    }

    const changelink = (e) => {
        setlink(e.target.value)
        console.log(link);
    }

    const joinLink = () => {
        props.joinLinkAPI(link);
    }

    const [showLinkBar,setShow] = useState(false);
    return <Fragment>
        <Container>
            {<Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <div  className={classes.play} onClick={()=>setShow(!showLinkBar)}>
                    <FontAwesomeIcon icon={faLink} color="orange"/> Join through link
                    </div>
                    {showLinkBar && <form className={classes.form} >
                        <input className={classes.link} type="text" placeholder="Enter Link" onChange={changelink}>
                        </input>
                        <div className={classes.join} onClick={joinLink}>JOIN</div>
                    </form>}
                </Col>
            </Row> }
            { showjoinLink && <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <div  className={classes.play} onClick={createGame}>
                    Create Game <FontAwesomeIcon icon={faPlus} color="orange"/> 
                    </div>
                </Col>
            </Row>} 
        </Container>
    </Fragment>
}

export default Links;
