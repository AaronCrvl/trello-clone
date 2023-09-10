import AppRouter from "./routes/appRouter";
import { RouterProvider } from 'react-router-dom';

function App() {
  const router = new AppRouter().mapRoutes()
  
  return (
    <div className='App'>
      <div className='w-auto h-auto font-poppins'>        
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App; // !_☄