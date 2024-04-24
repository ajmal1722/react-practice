import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './assets/pages/HomePage';
import MainLayout from './assets/layoutes/MainLayout';
import JobPage from './assets/pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path={'/jobs'} element={<JobPage/>} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
