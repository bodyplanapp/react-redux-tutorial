import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router'


ReactDOM.render(

        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>

    , document.getElementById('root')
);
registerServiceWorker();
