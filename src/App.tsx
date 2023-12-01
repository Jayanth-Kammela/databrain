import React from 'react'
import Routeing from './Routeing'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Routeing />
      <div className="flex justify-center items-center h-screen">
        <a onClick={() => navigate('/stepform')} className='bg-sky-400 text-white px-12 py-4 mx-2 rounded-xl'>Form</a>
        <a onClick={() => navigate('/products')} className='bg-sky-400 text-white px-12 py-4 mx-2 rounded-xl'>E-Com</a>
        <a onClick={() => navigate('/lists')} className='bg-sky-400 text-white px-12 py-4 mx-2 rounded-xl'>Lists</a>
      </div>
    </React.Fragment>
  )
}

export default App