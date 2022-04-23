import { ReactNode } from 'react'
import { Character } from './character'

interface ContextWithChildren {
  children: ReactNode
}

export interface CharacterContextState {
  characters: Character[]
  currentPage: number
  lastPage: number
  isLoading: boolean
  selected: number
  loadData: () => void
  reloadData: () => void
  cleanAll: () => void
  setPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  selectCharacter: (characterId: number) => void
  editCharacter: (characterId: number, changes: EditableCharacterProps) => void
  deleteCharacter: (characterId: number) => void
  deselect: () => void
}
