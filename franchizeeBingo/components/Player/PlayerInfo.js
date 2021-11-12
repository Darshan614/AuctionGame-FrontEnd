import { Fragment } from 'react';
import classes from './PlayerInfo.module.css';

function PlayerInfo(props) {
    return (
        <Fragment>
            <div className={classes.card}>
            <div className={classes.name}>{props.player.playername}</div>
            <div className={classes.country}>{props.player.country}</div>
            <div className={classes.points}>{props.player.points}</div>
            <div className={classes.baseprice}>{props.player.basePrice}</div>
            </div>
        </Fragment>
    )
}

export default PlayerInfo;