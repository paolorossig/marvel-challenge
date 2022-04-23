import { FaPlay } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { RiPencilLine } from 'react-icons/ri'
import { Character } from '../types/character'

function CharacterCard({ character }: { character: Character }) {
  const {
    name,
    thumbnail: { path, extension },
    comics: { available: comicsAvailable },
    series: { available: seriesAvailable },
    stories: { available: storiesAvailable },
    urls
  } = character

  const wikiUrl = urls.find((el) => el.type === 'wiki')?.url

  return (
    <article className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border-2 border-transparent bg-gray-100 p-4 hover:border-black md:flex-row">
      <div className="flex items-center gap-3">
        <img
          src={`${path}/portrait_small.${extension}`}
          alt="profile"
          className="h-16 w-16 rounded-lg object-cover"
        />
        <h2 className="w-40">{name}</h2>
      </div>
      <div className="flex gap-10">
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
      </div>
      <div className="flex items-center gap-4">
        <button className="btn-icon">
          edit
          <RiPencilLine className="text-xl text-white" />
        </button>
        <button className="btn-icon">
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
      </div>
    </article>
  )
}

export default CharacterCard
