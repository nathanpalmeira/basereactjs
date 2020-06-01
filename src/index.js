import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Login from './components/Login';

const username = localStorage.getItem('@systemacacia/login');

if(username==null){
    ReactDOM.render( <Login />, document.getElementById('root'));
}else{

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));
}