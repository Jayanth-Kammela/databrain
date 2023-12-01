import React from 'react'
import StepperComponent from './components/Stepper'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import ListPage from './pages/ListPage'

const Routeing = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/stepform' element={<StepperComponent />} />
        <Route path='/products' element={<Products />} />
        <Route path='/lists' element={<ListPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default Routeing