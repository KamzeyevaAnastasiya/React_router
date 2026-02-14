import {createBrowserRouter, Navigate} from "react-router-dom";
import {App} from "../App";
import {Abibas} from "../components/pages/Abibas";
import {Adidas} from "../components/pages/Adidas";
import {Error404} from "../components/pages/Error404";
import {Login} from "../components/pages/Login";
import {Model} from "../components/pages/Model";
import {PretectedPage} from "../components/pages/PretectedPage";
import {Prices} from "../components/pages/Prices";
import {Puma} from "../components/pages/Puma";
import {ProtectedRoute} from "./ProtectedRoute";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    ERROR404: '/error404',
    MODEL: '/:brand/:id',
    PROTECTEDPAGE: '/protectedpage',
    LOGIN: '/login',
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR404}/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>,
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>,
            },
            {
                path: PATH.PRICES,
                element: <Prices/>,
            },
            {
                path: PATH.MODEL,
                element: <Model/>,
            },
            {
                path: PATH.PROTECTEDPAGE,
                element: (
                    <ProtectedRoute>
                        <PretectedPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: PATH.ERROR404,
                element: <Error404/>,
            },
            {
                path: PATH.LOGIN,
                element: <Login/>
            },
        ]
    },
]);
