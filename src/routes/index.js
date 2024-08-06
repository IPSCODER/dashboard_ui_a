import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Theme from "../scene/Theme";
import Cart from "../pages/cart/Cart";
import Notes from "../pages/notes/Notes";
import Progress from "../pages/progress/Progress";
import Wallets from "../pages/wallets/Wallets";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Theme/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"data",
                element:<Notes/>
            },
            {
                path:"progress",
                element:<Progress/>
            },
            {
                path:"wallets",
                element:<Wallets/>
            },
        ]
    }
]);

export default router;


