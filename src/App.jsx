import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [page, setPage] = useState()
  const [inputPage, setInputPage] = useState("")

  useEffect(() => {
    const carrega = async () => {
      try {
        const response = await api.get(`/characters/?page=${page}`)
        setData(response.data.items)
      } catch{
        console.error("deu ruim!!!")
      }
    }
      carrega()
  }, [page])
  

  return (
    <>
      <div className={s.top}>
        <label>Choose page</label>
        <input min={1} max={42} type="number" placeholder='Choose the page you want' value={inputPage} onChange={(e) => setInputPage(e.target.value)}/>
        <button onClick={() => setPage(Number(inputPage))}>BUSCAR</button>
      </div>
      <main>
        {data.map((item) => {
          return(
              <div key={item.id}>
                <Card
                    nome={item.name}

                    imagem={item.image}

                    especie={item.race}

                    ki={item.ki}
                    
                    maxKi={item.maxki}
                />
              </div>
          );
        })}
      </main>
    </>
  )
}

export default App