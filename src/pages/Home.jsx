import React from 'react'
import Hero from '../components/Hero/Hero'
import Brands from '../components/Brands/Brands'
import Arrivels from '../components/Arrivels/Arrivels'
import Browse from '../components/Browse/Browse'
import Swiper from '../components/Swiper/Swiper'
import Footer from '../components/Footer/Footer'
import Category from '../components/Category/Category'
import About from '../components/About/About'
import TopSelling from '../components/TopSelling/TopSelling'

const Home = () => {
  return (
    <>
        <Hero/>
        <Brands/>
        <Arrivels/>
        <TopSelling/>
        <Category/>
        <Browse/>
        <Swiper/>
        <About/>
        <Footer/>
    </>
  )
}

export default Home