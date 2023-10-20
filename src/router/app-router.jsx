import {createBrowserRouter} from "react-router-dom";
import NavBarExample from "../ui/components/nav-bar.jsx";
import {DcPage, HeroPage, MarvelPage} from "../heroes/index.js";
import {LoginPage} from "../auth/index.js";
import {SearchPage} from "../heroes/pages/search-page.jsx";


export const router = createBrowserRouter([

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
            {
                path: "/hero/:id",
                element: <HeroPage/>,

            },
            {
                path: "/search/:id",
                element: <SearchPage/>,

            },

        ]
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);