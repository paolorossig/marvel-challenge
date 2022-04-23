import { createContext, FC, useState, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CharacterContextState, ContextWithChildren } from '../types/context'

const { VITE_API_URL, VITE_API_TS, VITE_API_KEY, VITE_API_HASH } = import.meta
  .env

const CHARACTERS_BY_PAGE: number = 20

const initialState: CharacterContextState = {
  characters: [],
  currentPage: 0,
  lastPage: 0,
  isLoading: false
}

const CharactersContext = createContext(initialState)
CharactersContext.displayName = 'CharactersContext'

const CharactersProvider: FC<ContextWithChildren> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '0')
  const navigate = useNavigate()

  const [characters, setCharacters] = useState(initialState.characters)
  const [lastPage, setLastPage] = useState(initialState.lastPage)
  const [isLoading, setIsLoading] = useState(initialState.isLoading)

  const getData = async (page: number) => {
    setIsLoading(true)

    const offset = (page - 1) * CHARACTERS_BY_PAGE
    const params = new URLSearchParams({
      limit: CHARACTERS_BY_PAGE.toString(),
      offset: offset.toString(),
      ts: VITE_API_TS,
      apikey: VITE_API_KEY,
      hash: VITE_API_HASH
    })

    const response = await fetch(`${VITE_API_URL}characters?${params}`)
    const data = await response.json()
    if (data.code === 200) {
      setCharacters(data.data.results)
      setLastPage(Math.ceil(data.data.total / CHARACTERS_BY_PAGE))
    }

    setIsLoading(false)
  }

  useEffect(() => {
    currentPage && getData(currentPage)
  }, [currentPage])

  const loadData = () => setSearchParams({ page: '1' })
  const reloadData = () => getData(currentPage)
  const cleanAll = () => {
    setCharacters(initialState.characters)
    navigate('/characters')
  }
  const setPage = (page: number) => setSearchParams({ page: page.toString() })
  const prevPage = () => setPage(currentPage - 1)
  const nextPage = () => setPage(currentPage + 1)

  return (
    <CharactersContext.Provider
      value={{
        characters,
        currentPage,
        lastPage,
        isLoading,
        loadData,
        reloadData,
        cleanAll,
        setPage,
        prevPage,
        nextPage
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharacters = () => {
  const context = useContext(CharactersContext)
  if (!context) {
    throw new Error('useCharacters must be used within an CharactersProvider')
  }

  return context
}

export default CharactersProvider
