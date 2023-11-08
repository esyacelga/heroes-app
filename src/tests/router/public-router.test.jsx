import { screen, render } from '@testing-library/react'
import {PublicRoute} from "../../router/public-route.jsx";
import {AuthContext} from "../../auth/index.js";
import debug from "debug";

describe('Pruebas en public route', () => {
    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        screen.debug();
        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    })
})