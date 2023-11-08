import {render, screen} from '@testing-library/react'
import {PublicRoute} from "../../router/public-route.jsx";
import {AuthContext} from "../../auth/index.js";
import {MemoryRouter, Route, Router, Routes} from "react-router-dom";

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

    test('', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Santiago',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }></Route>
                        <Route path='marvel' element={<h1>PAGINA Marvel</h1>}></Route>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();
        expect(screen.getByText('PAGINA Marvel')).toBeTruthy();

    })
})