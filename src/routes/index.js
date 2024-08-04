import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Theme from "../scene/Theme";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Theme/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    }
]);

export default router;


