import {authReducer} from "../../../auth/index.js";
import {types} from "../../../auth/types/types.js";

describe('Pruebas en el auth Reducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged: false})
    })
    test('debe de (login ) llamar autneticar y establecer usuario y logged en true', () => {
        const action = {
            types: types.login,
            payLoad: {
                name: 'Santiago',
                id: '1234'
            }
        }

        const state = authReducer({logged: false}, action)
        expect(state).toEqual({logged: true, user: action.payLoad});

    })

    test('debe de (logout ) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: {id: '123', name: 'Santiago'}
        }

        const action = {
            types: types.logout
        }
        const newState = authReducer(state, action)

        expect(newState).toEqual({logged: false});

    })

})

