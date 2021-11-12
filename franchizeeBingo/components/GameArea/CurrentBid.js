import classes from './CurrentBid.module.css';
import { useEffect, useState } from 'react';
function CurrentBid(props){
    return(
        <div className={classes.currentbid}>
            <div>Current Bid: {props.bidder}</div>
            <div>Bid Price: {props.currbid}</div>
        </div>
    )
}

export default CurrentBid;