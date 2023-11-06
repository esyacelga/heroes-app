import {authReducer} from "../../../auth/index.js";
import {types} from "../../../auth/types/types.js";
const initialState = {
    logged: false,
    types: types.logout,
}
describe('Pruebas en el auth Reducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged: false})
    })
})