export interface Item {
  resourceURI: string
  name: string
  type?: string
}

export interface Url {
  type: string
  url: string
}

export interface Collection {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: Collection
  series: Collection
  stories: Collection
  events: Collection
  urls: Url[]
}
