import WelcomeBoard from '../components/WelcomeBoard';
import Top from '../components/Top';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayOptions from '../components/PlayOptions/PlayOptions';
import classes from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <Top />
      <WelcomeBoard className={classes.back}/>
      <PlayOptions/>
    </Fragment>
  )
}
