import { FaPlay } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { RiPencilLine } from 'react-icons/ri'
import { useCharacters } from '../contexts/characters'
import { Character } from '../types/character'

function CharacterCard({ character }: { character: Character }) {
  const {
    id: characterId,
    name,
    imageUrl,
    comicsAvailable,
    seriesAvailable,
    storiesAvailable,
    wikiUrl
  } = character

  const { selectCharacter, deleteCharacter } = useCharacters()
  const editHandler = () => selectCharacter(characterId)
  const deleteHandler = () => deleteCharacter(characterId)

  return (
    <tr className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border-2 border-transparent bg-gray-100 p-4 hover:border-black md:flex-row">
      <th className="flex items-center gap-3">
        <img
          src={imageUrl}
          alt="profile"
          className="h-16 w-16 rounded-lg object-cover"
        />
        <h2 className="w-40">{name}</h2>
      </th>
      <th className="flex gap-10">
        <div className="text-center">
          <p className="text-2xl">{comicsAvailable}</p>
          <p className="font-abel text-xs font-extralight">Comics</p>
        </div>
        <div className="text-center">
          <p className="text-2xl">{seriesAvailable}</p>
          <p className="font-abel text-xs font-extralight">Series</p>
        </div>
        <div className="text-center">
          <p className="text-2xl">{storiesAvailable}</p>
          <p className="font-abel text-xs font-extralight">Stories</p>
        </div>
      </th>
      <th className="flex items-center gap-4">
        <button onClick={editHandler} className="btn-icon">
          edit
          <RiPencilLine className="text-xl text-white" />
        </button>
        <button onClick={deleteHandler} className="btn-icon">
          delete
          <BsTrash className="text-xl text-white" />
        </button>
        <a
          href={wikiUrl}
          target="_blank"
          aria-label="Wiki"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FaPlay className="text-3xl hover:animate-pulse hover:cursor-pointer hover:text-gray-700" />
        </a>
      </th>
    </tr>
  )
}

export default CharacterCard
