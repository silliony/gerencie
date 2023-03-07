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
        <Route index path="/" element={<Home />} />
      </Route>
    )
  );
  
  function Routes() {
    return <RouterProvider router={router} />;
  }
  
  export default Routes;