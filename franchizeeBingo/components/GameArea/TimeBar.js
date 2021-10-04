import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from './TimeBar.module.css';
import { useState, useEffect } from 'react';

function TimeBar() {
    const [time, settime] = useState(0);
    useEffect(() => {
        for (let a = 1; a <= 10; a++) {
            setTimeout(() => {
                console.log(a * 10);
                settime(a*10);
            }, a * 1000);
        }
    },[])
    return (
        <ProgressBar animated className={classes.timebar} variant="warning" now={time} />
    )
}

export default TimeBar;