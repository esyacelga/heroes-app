import {types} from "../types/types.js";

const initialState = {
    logged: false
}
export const authReducer = (estado = initialState, action) => {
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
            return {
                ...estado
            };
    }
}