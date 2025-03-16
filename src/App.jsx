import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import MusicArea from './components/MusicArea'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MusicArea></MusicArea>
    </>
  )
}

export default App
