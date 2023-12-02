import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonPage = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className="flex justify-center items-center h-screen">
                <button onClick={() => navigate('/stepform')} className='bg-sky-400 text-white px-12 py-4 mx-2 rounded-xl'>Form</button>
                <button onClick={() => navigate('/products')} className='bg-sky-400 text-white px-12 py-4 mx-2 rounded-xl'>E-Com</button>
                <button onClick={() => navigate('/lists')} className='bg-sky-400 text-white px-12 py-4 mx-2 rounded-xl'>Lists</button>
            </div>
        </React.Fragment>
    )
}

export default ButtonPage