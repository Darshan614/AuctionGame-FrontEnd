import classes from './Practice.module.css';
import Link from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

function Practice() {
    return(
        <a><div className={classes.play}><FontAwesomeIcon className={classes.ic} icon={faDumbbell}/> Practice Match</div></a>
    )
}

export default Practice;