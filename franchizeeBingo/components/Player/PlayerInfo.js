import { Fragment } from 'react';
import classes from './PlayerInfo.module.css';

function PlayerInfo() {
    return (
        <Fragment>
            <div className={classes.card}>
            <div className={classes.name}>MS DHONI</div>
            <div className={classes.country}>INDIA</div>
            <div className={classes.points}>100</div>
            <div className={classes.baseprice}>Base Price=50</div>
            </div>
        </Fragment>
    )
}

export default PlayerInfo;