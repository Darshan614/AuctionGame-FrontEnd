import { Fragment,useEffect,useState } from 'react';
import Result from '../components/Result/Result';

function Results(){
    const [result,setresult] = useState([]);
    const [winner,setwinner] = useState({name:""});
    const gameID = localStorage.getItem('gameID');
    console.log('gameid',gameID);
    const game = {
        gameid:gameID
    }
    useEffect(()=>{
        fetch("http://localhost:8080/getresult",{
            method:'post',
            body: JSON.stringify(game),
            headers: { "Content-Type": "application/json" }
        })
        .then((res)=>{
            console.log('results of  game',res);
            return res.json();
        })
        .then((data)=>{
            console.log('result',data.game);
            setresult(data.game);
            console.log('result set',result);
            // const champion = data.game.reduce((prev,curr)=>{
			// 	return (prev.totalpoints<curr.totalpoints?curr:prev);
            // })
            setwinner(data.winner);
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <Fragment>
            <Result result={result} winner={winner}></Result>
        </Fragment>
    )
}

export default Results;