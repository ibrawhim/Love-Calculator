import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'
import Budget from './pages/Budget'
import { Route, Routes } from 'react-router-dom';
import Addbudget from './pages/Addbudget';




function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/budget'  element={<Budget/>}/>
      <Route path='/addbudget'  element={<Addbudget/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
