import {Navigate} from "react-router-dom";

type Props = {
    children: React.ReactNode
};

export const ProtectedRoute = ({children}: Props) => {
    const logged = false
    return logged ? children : <Navigate to={'/error404'}></Navigate>
};