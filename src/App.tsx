import { FaPlay } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { RiPencilLine } from 'react-icons/ri'
import profile from './test_profile.png'

function App() {
  return (
    <div className="h-screen w-screen">
      <main className="mx-auto flex h-full max-w-3xl flex-col gap-5 px-4 py-5 md:gap-10 md:py-20">
        <h1 className="text-center text-5xl md:py-8">Marvel challenge</h1>
        <div className="flex justify-between gap-2">
          <button className="btn">Load data</button>
          <button className="btn">Reload data</button>
          <button className="btn">Clean All</button>
        </div>
        <section className="flex-auto">
          <article className="flex flex-col items-center justify-between gap-4 rounded-xl border-2 border-transparent bg-gray-100 p-4 hover:border-black md:flex-row">
            <div className="flex items-center gap-3">
              <img src={profile} alt="profile" className="h-16 w-16" />
              <h2>Name</h2>
            </div>
            <div className="flex gap-10">
              <div className="text-center">
                <p className="text-2xl">13</p>
                <p className="font-abel text-xs font-extralight">Comics</p>
              </div>
              <div className="text-center">
                <p className="text-2xl">3</p>
                <p className="font-abel text-xs font-extralight">Series</p>
              </div>
              <div className="text-center">
                <p className="text-2xl">21</p>
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
              <button className="ml-2">
                <FaPlay className="text-3xl" />
              </button>
            </div>
          </article>
        </section>
        <div className="mx-auto flex w-[300px] items-center justify-between">
          <button className="btn opacity-30" disabled>
            Prev
          </button>
          <div className="flex gap-2">
            <a href="#" className="btn-sm-active">
              1
            </a>
            <a href="#" className="btn-sm">
              2
            </a>
            <a href="#" className="btn-sm">
              3
            </a>
          </div>
          <button className="btn">Next</button>
        </div>
      </main>
    </div>
  )
}

export default App
