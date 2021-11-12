import classes from "./Bidbutton.module.css";

function Bidbutton(props){
    return(
        <div>
            
        {props.moneyleft >= props.nextbid && <button className={classes.bidbutton} onClick={props.onbid}>Bid</button>}
        </div>
    )
}

export default Bidbutton; 