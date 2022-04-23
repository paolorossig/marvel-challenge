import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CharactersProvider from './contexts/characters'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
)
