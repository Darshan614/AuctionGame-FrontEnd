import PlayOnline from './PlayOnline';
import Practice from './Practice';
import classes from './PlayOptions.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Col from 'react-bootstrap/Col';
let a=0;
function PlayOptions() {
    
    const playOnlineHandler = () => {
        console.log("online selected");
        
    }
    return(
        <div className={classes.options}>
            <Container>
                <Row>
                    <Col xs={6}><PlayOnline playOnlineHandler={playOnlineHandler}/></Col>
                    <Col xs={6}><Practice /></Col>
                </Row>
            </Container> 
        </div>
    )
}

export default PlayOptions;