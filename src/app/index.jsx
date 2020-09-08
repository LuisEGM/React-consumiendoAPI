import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

// Desde redux
import { Provider } from 'react-redux';
import store from './store';

//Agregando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <div className="container">        
            <h1 className="text-center" style={{marginTop: "15px",marginBottom:"10px"}}>
                Lista de usuarios
            </h1>
            <App/>
        </div>
    </Provider>
    ,document.getElementById("root"));