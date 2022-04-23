import { useCharacters } from '../contexts/characters'
import CharacterCard from './CharacterCard'
import Pagination from './Pagination'
import Spinner from './Spinner'

function ListCharacters() {
  const { loadData, reloadData, cleanAll, isLoading, characters } =
    useCharacters()

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-5 px-4 py-5 md:gap-10 md:py-20">
      <h1 className="text-center text-5xl md:py-8">Marvel challenge</h1>
      <div className="flex justify-between gap-2 text-sm md:text-base">
        <button onClick={loadData} className="btn">
          Load data
        </button>
        <button onClick={reloadData} className="btn">
          Reload data
        </button>
        <button onClick={cleanAll} className="btn">
          Clean All
        </button>
      </div>
      {isLoading ? (
        <div className="flex flex-auto items-center justify-center">
          <Spinner />
        </div>
      ) : characters?.length ? (
        <section className="flex flex-auto flex-col items-start justify-start gap-5">
          <div className="flex w-full flex-col gap-2">
            {characters?.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
          </div>
          <Pagination />
        </section>
      ) : null}
    </main>
  )
}

export default ListCharacters
