import { Fragment } from "react";
import classes from './Result.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function Result(props){
    return (
        <Fragment>
        <div className={classes.res}>
        <div className={classes.heading}>RESULTS<FontAwesomeIcon className={classes.ic} icon={faTrophy} />
</div>
        <div className={classes.winner}>
        <span className={classes.name}>{props.winner.name}</span>
        <span className={classes.points}>{props.winner.totalpoints}</span>
        <span className={classes.money}>{props.winner.moneyleft}</span>
        </div>
        <div>{props.result.map((player)=>{
            return <li className={classes.itemlist}><span className={classes.name}>{player.name}</span>
            <span className={classes.points}>{player.totalpoints}</span>
            <span className={classes.money}>{player.moneyleft}</span></li>
        })}</div>
        </div>
        </Fragment>
    )
}

export default Result;