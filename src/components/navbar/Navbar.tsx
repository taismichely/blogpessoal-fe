import { Link } from "react-router-dom"

function navbar() {
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
            Sair
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar