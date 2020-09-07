import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

//Agregando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <div className="container">        
        <h1 className="text-center" style={{marginTop: "15px",marginBottom:"10px"}}>
            Lista de usuarios
        </h1>
        <App/>
    </div>
    ,document.getElementById("root"));