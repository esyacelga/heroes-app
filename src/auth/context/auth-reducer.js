import {types} from "../types/types.js";

const initialState = {
    logged: false
}
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.loguin:
            return {
                ...state,
                logged: true,
                name: action.payLoad
            };
        case types.logout:
            return {
                ...state,
                logged: false
            };
        default:
            break;
    }
}