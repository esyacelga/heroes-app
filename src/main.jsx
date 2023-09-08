import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {HeroresApp} from "./heroes/components/herores-app.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<RouterProvider router={router}></RouterProvider>*/}
        <HeroresApp></HeroresApp>
        {/*<HeroresApp />*/}
    </React.StrictMode>,
)
