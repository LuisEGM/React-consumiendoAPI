import React, { Fragment } from 'react';
import { render } from 'react-dom';
import App from './components/example.jsx';

//Agregando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Fragment>
    <div className="container">        
        <h1 className="text-center" style={{marginTop: "15px",marginBottom:"10px"}}>
            Lista de usuarios
        </h1>
        <App/>
    </div>
    </Fragment>
    ,document.getElementById("root"));