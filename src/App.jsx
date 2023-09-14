import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './components/Country/Country'
import Header from './components/Header/Header'
import Countries from './components/Countires/Countries'

function App() {
  

  return (
    <>
     <div className='app'>
    <Header></Header>
    <Countries></Countries>
    

     </div>
    </>
  )
}

export default App
