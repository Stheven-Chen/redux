import React from 'react'
import {Link} from 'react-router-dom'


const In: React.FC = () => {
  return (
    <>
        <div className="bg-gray-300 h-16 w-screen">Ini Adalah In</div>
        <button className="bg-emerald-500 w-32 text-white font-semibold h-10 rounded-full shadow-lg hover:bg-emeral-700 transition-transform duration-300 transform-gpu active:scale-110">
            <Link to='/home'>Back to Home</Link>
        </button>
    
    </>
  )
}

export default In;