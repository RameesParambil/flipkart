import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Categories/>
        <Banner />
    </Fragment>
  )
}

export default HomePage
