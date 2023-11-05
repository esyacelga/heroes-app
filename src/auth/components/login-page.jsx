import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/index.js";

export const LoginPage = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
        login('Santiago Yacelga')
        navigate('/', {replace: true})
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
