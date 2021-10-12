import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router } from 'react-router-dom';



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
