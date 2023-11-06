import {AuthContext} from "../context/index.js";

import {useNavigate} from "react-router-dom";
import {useContext} from "react";

export const LoginPage = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const lastPath = localStorage.getItem('lastPath') || '/';

    const onLogin = () => {
        login('Santiago Yacelga')
        navigate(lastPath, {replace: true})
    }

    return (
        <div className="container mt-5">
            <h1>Loguin</h1>
            <hr/>
            <button className="btn btn-primary" onClick={onLogin}>
                login
            </button>
        </div>
    )
}
