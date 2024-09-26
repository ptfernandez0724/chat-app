import { Routes, Route, Navigate } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { useAuthContext } from './context/AuthContext'
import Footer from './components/footer/Footer'

function App() {
  const {authUser}= useAuthContext();
  return (
    <>
      <div className='h-screen flex flex-col'>
        {/* Main content area */}
        <div className='flex-grow flex items-center justify-center p-4'>
          <Routes>
            <Route path='/' element={ authUser ? <Home /> : <Navigate to= {"/login"} /> } />
            <Route path='/signup' element={ authUser ? <Navigate to="/" /> : <SignUp /> } />
            <Route path='/login' element={ authUser ? <Navigate to="/" /> : <Login />} />
          </Routes>
          <Toaster />
        </div>
        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </>
  )
}

export default App;
