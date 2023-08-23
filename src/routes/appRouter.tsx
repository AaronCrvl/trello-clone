import { createBrowserRouter } from "react-router-dom";
import NavBar from '../components/navbar';
import StartPage from '../pages/startPage';
import EditBoard from '../pages/editBoard';

class AppRouter {
    mapRoutes () : any {
        return createBrowserRouter([
        {    
            element: <NavBar />,
            children: [
                {
                    path: "/",
                    element: <StartPage />,                    
                },
                {
                    path: "editBoard",
                    element: <EditBoard />,                          
                },
            ],
        },
    ])}

    constructor () {}
}

export default AppRouter;