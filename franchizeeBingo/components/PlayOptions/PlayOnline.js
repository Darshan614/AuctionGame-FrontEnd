import { Fragment } from "react";
import classes from './PlayOnline.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

function PlayOnline(props){
    return(
        <Fragment>
            
            <Link href='/OnlineMode'><div className={classes.play}><FontAwesomeIcon className={classes.ic} icon={faUserFriends}/>Play Online</div></Link>
        </Fragment>
    )
}

export default PlayOnline;