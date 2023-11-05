import {AuthContext} from "./auth-context.jsx";
import {useReducer} from "react";
import {authReducer} from "./auth-reducer.js";
import {types} from "../types/types.js";

const initialState = {
    logged: false,
}
export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);
    const login = (name = '') => {
        const action = {
            types: types.login,
            payLoad: {
                id: 'ABC',
                name: name
            }
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{...authState, login: login}}>
            {children}
        </AuthContext.Provider>
    );
}