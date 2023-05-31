import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {login} from '../reducers/userReducer'


const Login: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {

    dispatch(login({user, nama}))

    console.log('Username:', user);
    console.log('Nama:', nama);
    navigate('/home')

  };

  return (
    <>
      <div className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="user" className="block text-gray-700">Username</label>
          <input
            type="text"
            name="user"
            onChange={(event) => setUser(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-gray-700">Nama</label>
          <input
            type="text"
            name="nama"
            onChange={(event) => setNama(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
