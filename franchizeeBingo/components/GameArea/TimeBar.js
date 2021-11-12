import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from './TimeBar.module.css';
// import { useState, useEffect } from 'react';
// function TimeBar(props) {
//     const [timerem,settimerem] = useState(0);

//      useEffect(() => {
//          let a = 0;
//         const currtime = new Date().getSeconds();
//         console.log(currtime);
//         const finaltime = currtime + 10;
//         const timer = ()=>{setInterval(() => {
//                 const cm = new Date().getSeconds();
//                 settimerem(cm-currtime);
//                 console.log(cm-currtime,'current date');
//                 if(cm==finaltime)
//                 {
//                     clearInterval(timer);
//                     //call for another player
//                 }
//             }, 1000);
//         }
//         timer();
//         clearInterval(timer);
//         return ()=>{
//             console.log("clearing runs");
//             clearInterval(timer);
//         }
//     },[props]) 
    
//     return (
//         <div>
//         <p>TImebar</p>
//         <p>{timerem}</p>
//         {/* <button onClick={timer} >YahooGoogle</button> */}
//         {/* <div>{<p>{props.fresh} fresh</p>}</div> */}
        // <ProgressBar animated className={classes.timebar} variant="warning" now={time} /> */}
//         </div>
//     )
// }

// export default TimeBar;

import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

//   function toggle() {
//     setIsActive(!isActive);
//   }

  function reset() {
    setSeconds(0);
    //setIsActive(false);
  }

  useEffect(() => {
      
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        if(seconds==10){
            console.log("Time Finished")
            //fetch new player
            props.finalbid();
        }
      }, 1000);
    } else if (seconds !== 0 || seconds==10) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(()=>{
      reset();
  },[props])

  return (
    <div className="app">
      <div className="row">
        
        <ProgressBar animated className={classes.timebar} variant="warning" now={seconds*10} />
      </div>
    </div>
  );
};

export default Timer;
