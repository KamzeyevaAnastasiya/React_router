import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)


/*
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
*/
