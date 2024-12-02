import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import SinglePage from './pages/SinglePage'

const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SinglePage/>}/>
      </Routes>
    </>
  )
}

export default App