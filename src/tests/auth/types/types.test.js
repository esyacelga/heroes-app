import {types} from "../../../auth/types/types.js";

describe('Pruebas e types.js', ()=>{
    test('debe regresar estos types',()=>{
        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        })
    })
})