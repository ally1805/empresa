import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/index.tsx";
import { Sobre } from "./sobre/index.tsx";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/Sobre",
        element:<Sobre/>
    }

])
export { router };