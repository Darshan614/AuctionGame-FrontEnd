import GameZone from '../components/GameArea/GameZone';
import { useState } from 'react';
import * as io from 'socket.io-client';
import  Router  from 'next/router';
const socket = io.connect('http://localhost:8080');
let i = 0;

function GameArea(){
    const [nextbid,setnextbid] = useState(50);
    const [currbid,setcurrbid] = useState(50);
    const [bidder,setbidder] = useState("N-a-n");
    const [fresh,setfresh] = useState(true);
    const [player,setplayer] = useState({playername:"MS DHONI",country:"INDIA",basePrice:70,points:100,category:"RIGHT-HAND BATTER"});
    const [playerlist,setplayerlist] = useState([]);
    const [moneyleft,setmoneyleft] = useState(20000000);

    if(typeof(window)!=="undefined")
    {
        const code = localStorage.getItem('gameID'); 
        console.log('code',code);
        
            
            socket.on('connect',function(){
                socket.emit('room',code);
            })
        
        socket.on('bid',data=>{
            console.log('data after bidding',data);
            setbidder(data.biddetails.username);
            setcurrbid(data.biddetails.currentbid);
            setnextbid(data.biddetails.nextbid);
            //setfresh(fresh=>!fresh)
        })
        socket.on('change',data=>{
            console.log('winner data',data);
            setplayer(data.newplayer);
            setcurrbid("--");
            setbidder("N-a-n");
            setnextbid(data.newplayer.basePrice);
        })
    }
       
    
    const onbid = () => {
        const gameID = localStorage.getItem('gameID');
        const uID = JSON.parse(localStorage.getItem('user')).id;
        const uName = JSON.parse(localStorage.getItem('user')).username;
        console.log(gameID,uID,uName);
        let pin = {
            gameLink:gameID,
            userID:uID,
            username:uName,
            currentbid:nextbid,
            nextbid:nextbid
        };
        fetch("http://localhost:8080/bid",{
            method:'post',
            body: JSON.stringify(pin),
            headers: { "Content-Type": "application/json" }
        })
        .then((res)=>{
            console.log('res',res);
            return res.json();
        })
        .then((data)=>{
            console.log('data',data)
            
        })
        .catch((err)=>{
            console.log(err);
        })
        // setcurrbid(currbid=>nextbid);
        
        // setfresh(fresh=>fresh+10);
        console.log("bid increased")
    }
        
    const finalbid = () => {
        
        console.log("final bid called");
        const gameID = localStorage.getItem('gameID');
        console.log(gameID,'gameid os');
        const uID = JSON.parse(localStorage.getItem('user')).id;
        const uName = JSON.parse(localStorage.getItem('user')).username;
        const owner = {
            finalbid:currbid,
            ownername:bidder,
            gameId:gameID,
            index:i,
            points:player.points
        }
        i++;
        if(localStorage.getItem('gameOwner'))
        {
            fetch("http://localhost:8080/finalbid",{
            method:'post',
            body: JSON.stringify(owner),
            headers: { "Content-Type": "application/json" }
            })
            .then((res)=>{
                console.log('res',res);
                return res.json();
            })
            .then((data)=>{
                console.log('data',data)
                if(data.message=='Match Finished')
                {
                    console.log("HEre is the wijner ", data.winner)
                    // alert(data.winner.name,"won with ",data.winner.totalpoints);
                    // alert(data.winner.totalpoints);
                    Router.push('/Results');
                    return;
                }
                // setplayer({playername:data.playername,country:data.country,points:data.points,category:data.category});
                // setcurrbid("--");
                // setnextbid(data.basePrice);
                // setbidder("N-a-n")
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        if(bidder == uName)
        {
            setplayerlist(playerlist=>{
                return [...playerlist,player]
            })
            setmoneyleft(moneyleft=>{
                return moneyleft-(currbid*10000);
            })
        }
        
    }


    return (<div>
        <GameZone moneyleft={moneyleft} playerlist={playerlist} player={player} fresh={fresh} finalbid={finalbid} onbid={onbid} currbid={currbid} nextbid={nextbid} bidder={bidder}></GameZone>
    </div>)
}

export default GameArea;