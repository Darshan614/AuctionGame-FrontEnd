import classes from './NextBid.module.css';

function NextBid(props){
    return(
        <div className={classes.nextbid}>
            <div>Next Bid: {props.nextbid}</div>
        </div>
    )
}

export default NextBid;