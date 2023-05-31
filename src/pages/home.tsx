import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, logout} from '../reducers/userReducer'
import {useNavigate, Link} from 'react-router-dom'


const Home: React.FC = () => {
  const { nama, user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    dispatch(logout())
    navigate('/')
  }

  return (
    <div>
     <nav className="bg-sky-500 w-screen h-16 flex p-4 justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-dark font-semibold">Welcome, {nama}</h1>
          <h1 className="text-dark font-semibold">Username: {user}</h1>
        </div> 

        <button
          className="bg-red-500 w-24 h-10 rounded-full text-white shadow-lg hover:bg-red-700 transition-transform duration-300 transform-gpu active:scale-90"
          onClick={handleLogout}
        >
          LogOut
        </button>
      </nav>
      <button className="bg-yellow-500 w-24 h-10 rounded-full text-white shadow-lg hover:bg-yellow-700 transition-transform duration-300 transform-gpu active:scale-90">

      <Link to="in" >In</Link>
      </button>

    </div>
  ); 
};

export default Home;
