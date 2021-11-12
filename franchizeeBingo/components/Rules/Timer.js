import classes from "./Timer.module.css";
import { useState, useEffect } from 'react';


function Timer(){
    const [time,settime] = useState(20);
    useEffect(()=>{
        setInterval(()=>{
            settime(time=>time-1)
        },1000)
    },[])
    
    return (<div className={classes.timer}> 
        {time}
    </div>)
}

export default Timer;