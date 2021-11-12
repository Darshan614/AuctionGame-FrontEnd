// import Rules from '../components/GameArea/GameArea';
import Links from '../components/CreateGame/Links';
import LinkDisplay from '../components/CreateGame/LinkDisplay';
import { Fragment } from 'react';
import Top from '../components/Top';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PlayersList from '../components/CreateGame/PlayerList';
import PlayButton from '../components/CreateGame/PlayButton';
import Router from 'next/router';
// import openSocket from 'socket.io-client';
import * as io from 'socket.io-client';

function OnlineMode() {
    const [showLink,setshowLink] = useState();
    const [link,setLink] = useState();
    const [showList,setshowList] = useState();
    const [playerlist,setplayerlist] = useState([]);
    const [showGame,setshowgame] = useState(true);
    const [showplaybutton,setshowPlayButton] = useState(false)
     
    const createGameAPI = ()=>{
        console.log("Start creating game");
        console.log(localStorage.getItem('user'));
        localStorage.setItem('gameOwner',true);
        const uID = JSON.parse(localStorage.getItem('user')).id;
        console.log("userID",uID);
        let pin = {
            userID:uID
        }
        fetch("http://localhost:8080/createGame",{
            method:'post',
            body: JSON.stringify(pin),
            headers: { "Content-Type": "application/json" }
        })
        .then((res)=>{
            console.log('res',res);
            return res.json();
        })
        .then((data)=>{
            
            console.log('data',data);
            setshowLink(true);
            setshowgame();
            setLink(data.gameID);
            localStorage.setItem('gameID',data.gameID);
            //localStorage.setItem('gameOwner',)
            setshowPlayButton(true);
            setshowList(true);
            const socket = io.connect('http://localhost:8080');
            socket.on('connect',function(){
                socket.emit('room',data.gameID);
            })
            socket.on('join',data2 => {
                console.log("Is this socket working");
                console.log("data from BE ",data2);
                console.log("list from BE",data2.playersList);
                setplayerlist(data2.playersList);
                console.log('heres player list',playerlist);
                if(data2.action=="Player joined")
                {
                    setshowgame(false);
                }
            })
            socket.on('rules',data=>{
                if(data.action=="show rules")
                {
                    Router.push('/Rules');
                    console.log("show rules");
                }
            })
            setplayerlist([{name:data.owner}]);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    const joinLinkAPI = (link) => {
        console.log("Start joining game with link",link);
        localStorage.setItem('gameID',link);
        localStorage.setItem('gameOwner',false);
        console.log(localStorage.getItem('user'))
        const uID = JSON.parse(localStorage.getItem('user')).id;
        const uName = JSON.parse(localStorage.getItem('user')).username;
        console.log("userID",uID);
        let pin = {
            gameLink:link,
            userID:uID,
            username:uName
        }
        fetch("http://localhost:8080/joinGame",{
            method:'post',
            body: JSON.stringify(pin),
            headers: { "Content-Type": "application/json" }
        })
        .then((res)=>{
            console.log('res',res);
            return res.json();
        })
        .then((data)=>{
            console.log('data',data);
        })
        .catch((err)=>{
            console.log(err);
        })
        const socket = io.connect('http://localhost:8080');
            socket.on('connect',function(){
                socket.emit('room',link);
            })
            socket.on('join',data2 => {
                console.log("data from BE ",data2);
                console.log("list from BE",data2.playersList);
                setshowList(true);
                setplayerlist(data2.playersList);
                console.log('heres player list',data2.playerlist);
                if(data2.action=="Player joined")
                {
                    setshowgame(false);
                }
            })
            socket.on('rules',data=>{
                if(data.action=="show rules")
                {
                    Router.push('/Rules');
                    console.log("show rules");
                }
            })
    }

    const onplay = (gamelink) => {
        const pin = {
            gameId : gamelink
        }

        fetch("http://localhost:8080/rules",{
            method:'post',
            body: JSON.stringify(pin),
            headers: { "Content-Type": "application/json" }
        })
        .then((res)=>{
            console.log('res',res);
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch(err => console.log(err))
    }

    

    return (
        <Fragment>
            <Top />
            {!showplaybutton && showGame && <Links createGameAPI={createGameAPI} joinLinkAPI={joinLinkAPI} />}
            {showLink && <LinkDisplay link={link}></LinkDisplay>}
            {showList && <PlayersList PlayerList={playerlist}></PlayersList>}
            {showplaybutton && <PlayButton onplay={onplay} gamelink={link}></PlayButton>}
        </Fragment>
    )
}

export default OnlineMode;