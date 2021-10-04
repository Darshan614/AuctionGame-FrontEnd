import { Fragment } from "react";
import classes from './PlayOnline.module.css';
import Link from 'next/link';

function PlayOnline(props){
    return(
        <Fragment>
            <Link href='/OnlineMode'><div className={classes.play}>Play Online</div></Link>
        </Fragment>
    )
}

export default PlayOnline;