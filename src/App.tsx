import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cadastro from './pages/cadastro/cadastro';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className='min-h-[80vh]'>
        <Routes>
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/> */}
          <Route path='/' element={<Cadastro/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;