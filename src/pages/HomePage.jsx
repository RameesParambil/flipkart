import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Banner from '../components/Banner';
import Product from '../components/Product';




const HomePage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Categories/>
        <Banner />
        <Product title={"Offer Products"}/>
    </Fragment>
  )
}

export default HomePage
