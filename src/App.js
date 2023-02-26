import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import InsideProductAll from './Pages/Home/Products/InsideProductAll'
import './Style/Style.css'
import FAQ from './Pages/FAQ'

export default function App() {
  return (
          <Routes>
            <>
              <Route exact path='/' element={<HomePage/>}/>
              <Route path='/faq' element={<FAQ/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path={`/product/:slug`} element={<InsideProductAll/>}/>
            </>
          </Routes>
  )
}
