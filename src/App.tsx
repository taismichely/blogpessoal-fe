import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ListarTemas from './components/temas/listartemas/ListarTemas';
import FormTemas from './components/temas/formtemas/FormTemas';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import ListarPostagens from './components/postagens/listarpostagem/ListarPostagens';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import Perfil from './pages/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar/>
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path='/temas' element={<ListarTemas />}/>
                <Route path="/cadastrartema" element={<FormTemas />} />
                <Route path="/editartema/:id" element={<FormTemas />} />
                <Route path='/deletartema/:id' element={<DeletarTema/>}/>
                <Route path='/postagens' element={<ListarPostagens/>}/>
                <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                <Route path='/deletarpostagem/:id' element={<DeletarPostagem/>}/>
                <Route path='/perfil' element={<Perfil/>}/>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;