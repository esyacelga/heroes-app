import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {HeroresApp} from "./heroes/pages/herores-app.jsx";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HeroresApp></HeroresApp>
    </React.StrictMode>,
)
