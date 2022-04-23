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
  loadData?: () => void
  reloadData?: () => void
  cleanAll?: () => void
  setPage?: (number: number) => void
  nextPage?: () => void
  prevPage?: () => void
}
