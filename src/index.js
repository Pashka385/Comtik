import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Header';
import reportWebVitals from './reportWebVitals';
import Hero from './Hero';
import Uslug from './ulsug';
import About from './About';
import Galary from './galary';
import Comment from './Comment';
import FilesDownload from './files';
import Progress from './pregress';
import Email from './email';
import Footer from './footer';
import MapComponent from './Map';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='progress'></div>
    <App />
    <Hero/>
    <Uslug/>
    <Galary/>
    <About/>
    <Comment/>
    <FilesDownload/>
    <Progress/>
    <Email/>
    <MapComponent/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
