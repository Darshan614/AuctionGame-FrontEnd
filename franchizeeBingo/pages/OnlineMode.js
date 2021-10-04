import GameArea from '../components/GameArea/GameArea';
import JoinLink from '../components/CreateGame/JoinLink';
import { Fragment } from 'react';
import Top from '../components/Top';
import 'bootstrap/dist/css/bootstrap.min.css';

function OnlineMode() {
    return (
        <Fragment>
            <JoinLink />
            {/* <Top />
            <GameArea /> */}
        </Fragment>
    )
}

export default OnlineMode;