import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../../components/footer/footer';
import Mainlanding from '../../components/mainlanding/mainlanding'
import Augment from '../../components/augment/augment';
import Featuredproduct from '../../components/newproduct/newproduct';
import Productdata from '../../data/productdata/product.context'
import './style/homepage.css'
import Deals from '../../components/deals/deals';
import Carticon from '../../components/carticon/carticon';

const Homepage = ()=>
{
    return(
        <div className="homepage">
           
            <Mainlanding />
            <Augment />
            <Productdata>
                <Featuredproduct />
                <Link to="/cart"><Carticon /></Link>
            </Productdata>
            <Deals />
            <Footer />
        </div>
    ) 
}

export default Homepage;