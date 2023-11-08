import {types} from "../../auth/types/types.js";

describe('Prueas e tyepes.js', ()=>{
    test('debe regresar estos types',()=>{
        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        })
    })
})