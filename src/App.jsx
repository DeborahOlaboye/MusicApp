import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Side from './components/Side'
import MusicArea from './components/MusicArea'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Side></Side>
      <MusicArea></MusicArea>
    </>
  )
}

export default App
