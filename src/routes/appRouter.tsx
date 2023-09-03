import { createBrowserRouter } from "react-router-dom";
import NavBar from '../components/navbar';
import StartPage from '../pages/startPage';
import EditBoard from '../pages/editBoard';
import MyBoards from "../pages/myBoards";

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
                    path: "myboards",
                    element: <MyBoards />,                          
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