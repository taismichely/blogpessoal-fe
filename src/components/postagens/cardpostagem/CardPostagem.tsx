import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagemProps {
  postagem: Postagem
}

function CardPostagem({postagem}: CardPostagemProps) {
  return (
    <div className="border border-slate-900 flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-pink-300 py-2 px-4 items-center gap-4">
          <img 
            src={postagem.usuario?.foto} 
            className="h-8 rounded-full" 
            alt={postagem.usuario?.nome} />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {dateStyle: 'full', timeStyle: 'medium',}).format(new Date(postagem.data))}</p>
        </div>
        <div className="flex">
          <Link to={`/editarpostagem/${postagem.id}`} className="w-full bg-pink-500 hover:bg-pink-700 text-white flex items-center justify-center py-2">
            <button>Editar</button>
          </Link>
          <Link to={`/deletarpostagem/${postagem.id}`} className="w-full bg-red-500 hover:bg-red-700 text-white flex justify-center items-center py-2">
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardPostagem