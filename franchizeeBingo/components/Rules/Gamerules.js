import classes from './Gamerules.module.css';

function Gamerules(){
    return (<div>
        <h1 className={classes.heading}>RULES</h1>
        <ul className={classes.rules}>
            <li>Each player will get 200000000.</li>
            <li>Who so ever bids the more will get the player.</li>
            <li>Each player will try to create complete balanced team of 15.</li>
            <li>Each team should have:</li>
            <ul>
                <li>7 batters</li>
                <li>3 all-rounders</li>
                <li>5 bowlers</li>
            </ul>
            <li>In case no player creates a complete team result will be decided on basis of total points</li>
        </ul>
    </div>)
}

export default Gamerules;