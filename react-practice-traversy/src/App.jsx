import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Navbar from './assets/components/navbar'
import Hero from './assets/components/Hero';


import HomePage from './assets/pages/HomePage';
import MainLayout from './assets/layoutes/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
