import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext);
    return ((!logged) ? children : <Navigate to="/marvel"/>)
}