import { useNavigate } from "react-router-dom"
import CardPostagem from "../cardpostagem/CardPostagem"
import { useContext, useEffect, useState } from "react";
import type Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListarPostagens() {
  const navigate = useNavigate();
  const [postagem, setPostagens] = useState<Postagem[]>([]);
  const {usuario, handleLogout} = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagem() {
    try {
      await buscar('/postagens', setPostagens, {headers: {Authorization: token}})
    } catch(error: any) {
      if(error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado')
      navigate('/');
    }
  }, [token])

  useEffect(() => {
    buscarPostagem()
  }, [postagem.length])


  return (
    <>
      {postagem.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {postagem.map((postagem) => (
              <CardPostagem key={postagem.id} postagem={postagem}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListarPostagens