import { useCharacters } from '../contexts/characters'

function Pagination() {
  const { currentPage, lastPage, prevPage, nextPage } = useCharacters()
  console.log(currentPage)

  return (
    <div className="mx-auto flex w-full items-center justify-between text-sm md:max-w-[400px] md:text-base">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`btn ${
          currentPage === 1 && 'cursor-not-allowed opacity-30'
        }`}
      >
        Prev
      </button>
      <div className="flex gap-2">
        {Array.from({ length: lastPage }, (v, i) => i + 1)
          .filter((el) => el <= 3 || el >= lastPage - 1)
          .map((el, index) => (
            <a
              href={`?page=${el}`}
              key={el}
              className={el === currentPage ? 'btn-sm-active' : 'btn-sm'}
            >
              {index !== 2 ? el : '...'}
            </a>
          ))}
      </div>
      <button
        onClick={nextPage}
        disabled={currentPage === lastPage}
        className={`btn ${
          currentPage === lastPage && 'cursor-not-allowed opacity-30'
        }`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
