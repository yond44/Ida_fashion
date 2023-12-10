import React from 'react'
import Carousel from './hero/Carousel'
import Card from './hero/Card'
import Product from './product/Product'
import Banner from './banner/Banner'
import TopProduct from './topproduct/TopProduct'

const Home = () => {
  return (
    <>
      <Carousel/>
      <Card/>
      <Product/>
      <Banner/>
      <TopProduct/>
    </>
  )
}

export default Home
