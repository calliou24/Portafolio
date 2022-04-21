import React from 'react'
import ReactDOM from 'react-dom'

import './general-styles/main.css'
import './general-styles/fonts.css'
import './general-styles/icon-mod.css'


import { 
  Routes, 
  Route, 
  BrowserRouter } 
  from 'react-router-dom'


import Home from './components/Home/home'
import Projects from './components/Projects/projects'
import Skills from './components/Skills/skills'

import MainPage from './pages/MainPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="Portafolio/" element={<MainPage/>}>
          <Route index element={<Home/>}/>
          <Route index path="Portafolio/" element={<Home/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='skills' element={<Skills/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
