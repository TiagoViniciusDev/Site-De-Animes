import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AnimeDataProvider } from './context/context.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import AnimePage from './components/AnimePage.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <ErrorPage />, children: [
    {path: "/", element: <Home />},
    {path: "/pesquisa", element: <Search />},
    {path: "/animePage", element: <AnimePage />}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimeDataProvider>
      <RouterProvider router={router}/>
    </AnimeDataProvider>
  </React.StrictMode>,
)
