import React from 'react'

function Home() {
  return (
    <>
      <div style={{
        width:'100vw',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div>
          <div style={{
            width: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2>Bem vinde ao meu blog pessoal</h2>
            <p>Destaque as suas opiniões e pensamentos</p>
          </div>
          <div style={{
            width: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img 
              src="https://i.imgur.com/VpwApCU.png" 
              alt="Imagem da página home"
              width="400px"
            />

          </div>
        </div>

      </div>
    </>
  )
}

export default Home