import ListarPostagens from "../../components/postagens/listarpostagem/ListarPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>
      <div className='bg-indigo-900 flex justify-center'>
        <div className="container grid grid-cols-2 text-white">
          <div className='flex flex-col gap-4 items-center justify-center py-4'>
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl">Destaque as suas opnições e pensamentos</p>
            <div className="flex justify-around gap-4">
              <div className="flex justify-rounded gap-4">
                <ModalPostagem/>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <img 
              src="https://i.imgur.com/VpwApCU.png" 
              alt="Imagem da página home"
              width="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListarPostagens/>
    </>
  )
}

export default Home