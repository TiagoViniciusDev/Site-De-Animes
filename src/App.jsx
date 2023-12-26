import './App.css'
import AnimePage from './components/AnimePage'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Layout from './components/Layout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Site-De-Animes' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/Site-De-Animes/animePage' element={<AnimePage />}/>
            <Route path='/Site-De-Animes/pesquisa' element={<Search />}/>
            <Route path='/Site-De-Animes/*' element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
