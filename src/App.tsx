import { Navigate, Route, Routes } from 'react-router-dom'
import ListCharacters from './components/ListCharacters'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="characters" replace />} />
      <Route path="/characters">
        <Route index element={<ListCharacters />} />
        <Route path=":characterId" element={<p>Edit</p>} />
      </Route>
    </Routes>
  )
}

export default App
