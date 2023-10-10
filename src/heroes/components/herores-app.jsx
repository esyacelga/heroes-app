import {RouterProvider} from "react-router-dom";
import {router} from "../../router/app-router.jsx";

export const HeroresApp = () => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
