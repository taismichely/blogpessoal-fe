import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function navbar() {

  const navigate = useNavigate();
  const {handleLogout} = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Uusário desconectado!')
    navigate('/')
  }
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg">
          <Link to='/home' className="text-2xl font-bold">Blog pessoal</Link>
          <div className="flex gap-4">
            Postagens
            Temas
            Cadastrar Tema
            Perfil
            <Link to='' onClick={logout} className='hover: underline'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar