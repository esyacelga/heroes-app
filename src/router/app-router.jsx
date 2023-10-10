import {createBrowserRouter} from "react-router-dom";
import NavBarExample from "../ui/components/nav-bar.jsx";
import {DcPage, MarvelPage} from "../heroes/index.js";
import {LoginPage} from "../auth/index.js";


export const router = createBrowserRouter([
    /*    {
            path: "/!*",
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
        },*/
    {
        path: "/",
        element: <NavBarExample/>,
        children: [
            {
                path: "/marvel",
                element: <MarvelPage/>,
            },
            {
                path: "/dc",
                element: <DcPage/>,
            },

        ]
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);