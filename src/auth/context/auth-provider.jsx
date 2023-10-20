import {AuthContext} from "./auth-context.jsx";
import {useReducer} from "react";
import {authReducer} from "./auth-reducer.js";

const initialState = {
    logged: false,
}
export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}