import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProjectsPage from '../pages/ProjectsPage'
import Catalogs from '../pages/Catalogs'
import Contacts from '../pages/Contacts'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'catalogs',
        element: <Catalogs />
      },
      {
        path: 'contacts',
        element: <Contacts />
      }
    ],
  },
])
