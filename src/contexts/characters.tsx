import { createContext, FC, useState, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Character, EditableCharacterProps } from '../types/character'
import { CharacterContextState, ContextWithChildren } from '../types/context'

const apiUrl = import.meta.env.VITE_API_URL

const CHARACTERS_BY_PAGE: number = 20

const initialState: CharacterContextState = {
  characters: [],
  currentPage: 0,
  lastPage: 0,
  isLoading: false,
  selected: 0,
  loadData: () => null,
  reloadData: () => null,
  cleanAll: () => null,
  setPage: () => null,
  nextPage: () => null,
  prevPage: () => null,
  selectCharacter: () => null,
  editCharacter: () => null,
  deleteCharacter: () => null,
  deselect: () => null
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
  const [selected, setSelected] = useState(initialState.selected)

  const getData = async (page: number) => {
    setIsLoading(true)

    const offset = (page - 1) * CHARACTERS_BY_PAGE
    const params = new URLSearchParams({
      limit: CHARACTERS_BY_PAGE.toString(),
      offset: offset.toString()
    })

    const response = await fetch(`${apiUrl}/characters?${params}`)
    const data = await response.json()
    if (data.status === 'success') {
      setCharacters(data.data.characters)
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
  const deselect = () => setSelected(initialState.selected)
  const selectCharacter = (characterId: number) => setSelected(characterId)
  const editCharacter = (
    characterId: number,
    changes: EditableCharacterProps
  ) => {
    setCharacters((prev) => {
      const index = prev.findIndex((el) => el.id === characterId)
      let modified: any = prev.find((el) => el.id === characterId) || {}

      modified = { ...modified, ...changes }
      prev.splice(index, 1, modified)
      return prev
    })
  }
  const deleteCharacter = (characterId: number) =>
    setCharacters((prev) =>
      prev.filter((character) => character.id !== characterId)
    )

  return (
    <CharactersContext.Provider
      value={{
        characters,
        currentPage,
        lastPage,
        isLoading,
        selected,
        loadData,
        reloadData,
        cleanAll,
        setPage,
        prevPage,
        nextPage,
        deselect,
        selectCharacter,
        editCharacter,
        deleteCharacter
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
