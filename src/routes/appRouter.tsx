import { createBrowserRouter } from "react-router-dom";
import NavBar from '../components/navbar';
import StartPage from '../pages/startPage';
import EditBoard from '../pages/editBoard';
import BoardTemplates from "../pages/boardTemplates";
import ErrorBoundary from "../pages/errorBoundary";
import Loaders from "./loarders/loaders";

class AppRouter {    
  mapRoutes () : any {
    return createBrowserRouter([
    {    
      element: <NavBar />,
      errorElement: <ErrorBoundary />,
      children: [
          {
            path: "/",
            element: <StartPage />,             
            errorElement: <ErrorBoundary />                                
          },
          {
            path: "boardTemplates",
            element: <BoardTemplates />,                                    
            errorElement: <ErrorBoundary />     
          },
          {                    
            path: "editBoard/:templateId",
            element: <EditBoard />,   
            loader: async ({ request, params }) => new Loaders().getTemplate(Number.parseInt(params.templateId!)),
            errorElement: <ErrorBoundary />                                                                   
          },
      ],
    },
  ])}

  constructor () {}
}

export default AppRouter; // !_☄