import React, { useContext, useLayoutEffect, useState } from 'react';

 import './carticon.css'
 import { FiShoppingBag } from "react-icons/fi";
 import {productcontext} from '../../data/productdata/product.context';

const Carticon = ()=>
{
    const[cartcount,setcartcount] = useState(0);
    const cartitems = useContext(productcontext).cartitems;
    
    useLayoutEffect(()=>
    {
        setcartcount(cartitems.length)
    },[cartitems])

    return(
        <div className="cart-icon-wrapper">
            <div className="cart-icon">
                <div className="cartcount">{cartcount}</div>
                <FiShoppingBag size={35} color="rgb(105, 105, 105)" />
            </div>
        </div>
    )
}

export default Carticon;