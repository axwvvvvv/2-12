import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SinglePage from './pages/SinglePage'
import CategoryPage from './pages/CategoryPage'

const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SinglePage/>} />
        <Route path='category' element={<CategoryPage/>} />
      </Routes>
    </>
  )
}

export default App