import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeProducts from './components/HomeProducts/HomeProducts'
import Carousel from './components/carousel/Carousel';
import Singup from './components/singup/Singup';
import Login from './components/Login/Login';
import Index from './components/container/Index';
import Profile from './components/profile/Profile';
import Carosel1 from './components/carosel1/Carosel1'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './components/product/Product';
function App() {
  return (
    <>

      <Header />
      <main>
        <Switch>
          <Route path="/" exact >
            <Carousel />
            {/* <Carosel1/> */}
            <Product/>
            {/* <HomeProducts /> */}
            <Footer />
          </Route>

          <Route exact path="/singup">
            <Singup />
          </Route>

          <Route exact path="/login" >
            <Index />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>



    </>
  )
}

export default App
