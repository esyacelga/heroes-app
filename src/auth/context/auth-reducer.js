import {types} from "../types/types.js";

const initialState = {
    logged: false
}
export const authReducer = (estado = {}, action) => {
    console.log('Me han llamado');
    switch (action.types) {
        case types.login:
            return {
                ...estado,
                logged: true,
                user: action.payLoad
            };
        case types.logout:
            return {
                ...estado,
                logged: false
            };
        default:
            break;
    }
}