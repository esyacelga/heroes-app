import {createBrowserRouter, Navigate} from "react-router-dom";
import {MarvelPage} from "../heroes/components/marvel-page.jsx";
import {DcPage} from "../heroes/components/dc-page.jsx";
import {LoginPage} from "../auth/components/login-page.jsx";

export const router = createBrowserRouter([
    {
        path: "/*",
        element: <Navigate to="/login"/>,
    },
    {
        path: "/marvel",
        element: <MarvelPage/>,
    },
    {
        path: "/dc",
        element: <DcPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },

]);