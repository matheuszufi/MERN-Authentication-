import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import Header from'./components/Header'

function App() {
  return (
    <>
    <Header/>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
      </div>
     </Router>
    </>
  );
}

export default App