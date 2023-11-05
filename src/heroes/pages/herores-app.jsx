import {RouterProvider} from "react-router-dom";
import {router} from "../../router/app-router.jsx";
import {AuthProvider} from "../../auth/index.js";

export const HeroresApp = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    )
}
