import classes from './PlayerImage.module.css';

function PlayerImage(){
    return(
        <div className={classes.playerimage}><img className={classes.player} src='/MSDHONI.jpg'></img></div>
    )
}

export default PlayerImage;