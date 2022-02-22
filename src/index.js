import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import Home from './container/Home';
//import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    {/* <AppRouter/> */}
    <Navbar/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
 