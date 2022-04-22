import { useState } from 'react'
import CharacterCard from './components/CharacterCard'
import Spinner from './components/Spinner'
import type { Character } from './character'

const { VITE_API_URL, VITE_API_TS, VITE_API_KEY, VITE_API_HASH } = import.meta
  .env

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    const response = await fetch(
      `${VITE_API_URL}characters?ts=${VITE_API_TS}&apikey=${VITE_API_KEY}&hash=${VITE_API_HASH}`
    )
    const data = await response.json()
    console.log(data.data)
    data.code === 200 && setCharacters(data.data.results)
    setIsLoading(false)
  }

  const reloadData = () => getData()
  const cleanData = () => setCharacters([])

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-5 px-4 py-5 md:gap-10 md:py-20">
      <h1 className="text-center text-5xl md:py-8">Marvel challenge</h1>
      <div className="flex justify-between gap-2">
        <button onClick={getData} className="btn">
          Load data
        </button>
        <button onClick={reloadData} className="btn">
          Reload data
        </button>
        <button onClick={cleanData} className="btn">
          Clean All
        </button>
      </div>
      <section className="flex flex-auto flex-col items-center justify-center gap-5">
        {isLoading ? (
          <Spinner />
        ) : characters.length ? (
          <>
            <div className="flex w-full flex-col gap-2">
              {characters.map((character) => (
                <CharacterCard character={character} key={character.id} />
              ))}
            </div>
            <div className="mx-auto flex w-[300px] items-center justify-between">
              <button className="btn opacity-30" disabled>
                Prev
              </button>
              <div className="flex gap-2">
                <a href="#" className="btn-sm-active">
                  1
                </a>
                <a href="#" className="btn-sm">
                  2
                </a>
                <a href="#" className="btn-sm">
                  3
                </a>
              </div>
              <button className="btn">Next</button>
            </div>
          </>
        ) : null}
      </section>
    </main>
  )
}

export default App
