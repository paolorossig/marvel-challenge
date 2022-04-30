import { FormEvent, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { BiSave } from 'react-icons/bi'
import { useCharacters } from '../contexts/characters'

function EditModal() {
  const completeButtonRef = useRef(null)
  const { characters, selected, editCharacter, deselect } = useCharacters()
  const selectedCharacter = characters.find((el) => el.id === selected)

  const isOpen = selected > 0

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      comics: { value: string }
      series: { value: string }
      stories: { value: string }
    }
    const name = target.name.value
    const comicsAvailable = parseInt(target.comics.value)
    const seriesAvailable = parseInt(target.series.value)
    const storiesAvailable = parseInt(target.stories.value)

    editCharacter(selected, {
      name,
      comicsAvailable,
      seriesAvailable,
      storiesAvailable
    })
    deselect()
  }

  return (
    <Dialog
      initialFocus={completeButtonRef}
      open={isOpen}
      onClose={deselect}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative mx-auto flex max-w-sm flex-col gap-5 rounded-xl bg-white p-10">
          <Dialog.Title className="text-center text-lg font-medium leading-6 text-gray-900">
            Edit a character
          </Dialog.Title>
          <Dialog.Description className="font-abel">
            This will temporarily edit a character
          </Dialog.Description>
          <form
            className="flex flex-col gap-3 font-abel font-bold"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={selectedCharacter?.name}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Comics</label>
              <input
                type="number"
                name="comics"
                id="comics"
                defaultValue={selectedCharacter?.comicsAvailable}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Series</label>
              <input
                type="number"
                name="series"
                id="series"
                defaultValue={selectedCharacter?.seriesAvailable}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Stories</label>
              <input
                type="number"
                name="stories"
                id="stories"
                defaultValue={selectedCharacter?.storiesAvailable}
              />
            </div>
            <div className="mt-2 flex justify-evenly">
              <button type="submit" className="btn-icon">
                save
                <BiSave className="number-xl text-white" />
              </button>
              <button
                ref={completeButtonRef}
                onClick={deselect}
                className="btn font-boogaloo text-lg"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  )
}

export default EditModal
