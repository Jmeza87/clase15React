import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './Pages/Inicio'
import Tendencias from './Pages/Tendencias'
import Categorias from './Pages/Categorias'
import Detalles from './Pages/Detalles'
import Peliculas from './Pages/Peliculas'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Inicio2 from './Pages/Inicio2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Inicio2" element={<Inicio2/>} />
        <Route path="/Tendencias/:id" element={<Tendencias/>} />
        <Route path="/Categorias/:id/:tipo" element={<Categorias/>} />
        <Route path="/Detalle/:tipo/:id" element={<Detalles/>} />
        <Route path="/Peliculas/:id" element={<Peliculas/>} />
        <Route path="*" element={<Inicio/>} />
      </Routes>
    <Footer/>
 </BrowserRouter>
  )
}

export default App
