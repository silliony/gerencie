
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from 'react-router-dom';
  import { Home } from './pages';
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/home" element={<Home />} />
      </Route>
    )
  );
  
  function Routes() {
    return <RouterProvider router={router} />;
  }
  
  export default Routes;