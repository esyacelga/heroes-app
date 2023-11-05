import {AuthContext} from "./auth-context.jsx";
import {useReducer} from "react";
import {authReducer} from "./auth-reducer.js";
import {types} from "../types/types.js";

const initialState = {
    logged: false,
}
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);


    const login = (name = '') => {
        const user = {
            id: 'ABC',
            name: name
        }
        const action = {
            types: types.login,
            payLoad: user
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {}
        dispatch(action);

    }

    return (
        <AuthContext.Provider value={{...authState, login: login}}>
            {children}
        </AuthContext.Provider>
    );
}