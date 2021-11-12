import classes from './PlayerImage.module.css';

function PlayerImage(props){
    const image = "/" + props.player.playername + '.png';
    console.log(image,'image');
    return(
        <div className={classes.playerimage}><img className={classes.player} src={image}></img></div>
    )
}

export default PlayerImage;