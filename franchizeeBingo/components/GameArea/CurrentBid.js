import classes from './CurrentBid.module.css';

function CurrentBid(){
    return(
        <div className={classes.currentbid}>
            <div>Current Bid: Lionel Messi</div>
            <div>Bid Price: 75</div>
        </div>
    )
}

export default CurrentBid;