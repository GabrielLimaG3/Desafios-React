/* eslint-disable no-unused-vars */
import Home from "./pages/home"
import Login from "./pages/login"
import Feed from "./pages/feed"
import Test from "./Test.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Cadastro } from "./pages/cadastro"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/teste" element={<Test/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
