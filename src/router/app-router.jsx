import {createBrowserRouter} from "react-router-dom";
import NavBarExample from "../ui/components/nav-bar.jsx";
import {DcPage, HeroPage, MarvelPage} from "../heroes/index.js";
import {LoginPage} from "../auth/index.js";
import {SearchPage} from "../heroes/pages/search-page.jsx";
import {PrivateRoute} from "./private-route.jsx";
import {PublicRoute} from "./public-route.jsx";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <NavBarExample/>,
        children: [
            {
                path: "/marvel",
                element: <PrivateRoute><MarvelPage/></PrivateRoute>,
            },
            {
                path: "/dc",
                element: <DcPage/>,
            },
            {
                path: "/hero/:id",
                element: <HeroPage/>,

            },
            {
                path: "/search",
                element: <SearchPage/>,

            },

        ]
    },
    {
        path: "/login",
        element: <PublicRoute> <LoginPage/></PublicRoute>,
    },
]);