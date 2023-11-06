import {authReducer} from "../../../auth/index.js";

describe('Pruebas en el auth Reducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})
        console.log(state)
        expect(state).toEqual({logged: false})
    })
})