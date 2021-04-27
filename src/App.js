import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage';
import {BrowserRouter,Route} from 'react-router-dom'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Cartinfo from './pages/cartinfo/cartinfo';
import Productdata from './data/productdata/product.context';
import Checkout from './pages/checkout/checkout';
import Navbar from './components/navbar/navigation';


const stripepromise = loadStripe('pk_test_51IhaEkGU0fWKdb0TbJu3ifa4jT7etoF3KLu8Esx4JUGHVkfAf7SoDNfsfYCkj1VpEURvt619uvdaEpoxBaVPPZtq00ujgYFZcy')
function App() {
  return(
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Route component={Homepage} exact path="/" />
        <Elements stripe={stripepromise}>
           <Route component={Checkout} path="/checkout" />
        </Elements>
        <Productdata>
          <Route component={Cartinfo} path = "/cart" />
        </Productdata>
      </div>
    </BrowserRouter>
  )
}

export default App;
