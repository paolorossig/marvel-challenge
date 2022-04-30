export interface Character {
  id: number
  name: string
  imageUrl: string
  comicsAvailable: number
  seriesAvailable: number
  storiesAvailable: number
  wikiUrl: string
  createdAt: string
  updatedAt: string
  _id: string
  _v: number
}

export interface EditableCharacterProps {
  name: string
  comicsAvailable: number
  seriesAvailable: number
  storiesAvailable: number
}
