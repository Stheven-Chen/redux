import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import In from './pages/in'

const App: React.FC = ()=>{
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}/>
      <Route path="home/in" element={<In />} />
    </Routes>
  </Router>

  );
};

export default App;
