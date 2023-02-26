import React from 'react'
import Chart from '../../Components/Chart'
import Layout from '../../Components/Layout'
import Slider from '../../Components/Slider/Slider'
import Products from './Products/Products'

export default function HomePage() {
  return (
    <Layout>
      <Slider />
      <Products/>
      <Chart/>
    </Layout>
  )
}
