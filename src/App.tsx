import { Navigate, Route, Routes } from 'react-router-dom'
import ListCharacters from './components/ListCharacters'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="characters" replace />} />
      <Route path="/characters" element={<ListCharacters />} />
    </Routes>
  )
}

export default App
